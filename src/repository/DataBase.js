async function connect() {
    if (global.connection
        && global.connection.state != 'undefined') {
        return global.connection;
    }

    const mysql = require("mysql2/promise");

    const connection = await mysql
        .createConnection('mysql://root:@localhost:3306/instrumentodb'); ''
    console.log('Conectou ao banco.');
    global.connection = connection;
    return connection;
}

connect();

module.exports = {};