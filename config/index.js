const connection = require('./database')

const {
    PORT,
    HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = require('./environment.js')

module.exports = {
    connection,
    PORT,
    HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
}