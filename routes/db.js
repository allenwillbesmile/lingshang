var mysql = require("mysql");

var db=mysql.createConnection({
    host:'localhost',
    post:'3306',
    user:"root",
    password:'123456',
    database:"lingshang",
});



db.connect();