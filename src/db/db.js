import mysql from "mysql";

const connection = mysql.createConnection({
    host: "mydb.clcxgllpmzvk.us-east-1.rds.amazonaws.com",
    database: "mydb",
    user: "root",
    password: "12345678",
    port: 3306
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};