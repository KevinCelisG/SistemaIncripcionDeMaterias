import mysql from "mysql";

const connection = mysql.createConnection({
    host: "database-1.clcxgllpmzvk.us-east-1.rds.amazonaws.com",
    database: "mydb",
    user: "admin",
    password: "Fjg3rHwUEfDc2vn",
    port: 3306
});

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};