
// ToDo: uncomment when import problem is resolved
// import {loggerExpress, render_express_log} from "./logger"

const express = require("express");
const app = express()

// ToDo: uncomment when import problem is resolved
// app.use((req, res, next) => {
//     loggerExpress.log(render_express_log(req))
//     next()
// })

app.get("/", (req, res) => {
    res.send("<h1> Hello World !!! </h1> ");
});


app.listen(3000, () => {
    console.log("Listening on port 3000...");
});