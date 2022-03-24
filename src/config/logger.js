
import {ERROR_LOG_PATH, ACCESS_LOG_PATH, EXPRESS_LOGGER_FORMAT} from "./settings.js"

const winston = require('winston');

function createLogger(module){

    const error_log = [ERROR_LOG_PATH, module, "error_".concat(module)].join("/")
    const access_log = [ACCESS_LOG_PATH, module, "access_".concat(module)].join("/")

    return logger = winston.createLogger({
        format: winston.format.json(),
        defaultMeta: { service: 'user-service' },
        transports: [
          new winston.transports.File({ filename: error_log, level: 'error' }),
          new winston.transports.File({ filename: access_log, level: 'log' }),
        ],
      });
}


export function render_express_log(req) {
  const log_format = EXPRESS_LOGGER_FORMAT;
  const message = {}
  for(field in log_format)[
      message[field] = req[log_format[field]]
  ]
  return message;
}


export const {loggerExpress} = createLogger("express")

