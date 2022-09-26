
mkdir -p /opt/express-mariadb/logs/express
mkdir -p -p /opt/express-mariadb/logs/express

touch  /opt/express-mariadb/logs/express/access_express.log
touch /opt/express-mariadb/logs/express/error_express.log

npm install

node /opt/express-mariadb/src/config/index.js