let mysql = require('mysql');
let sqlPassword = require('..config');  

let connection = mysql.createConnection({
    host: 'local host', 
    user: 'root', 
    password: sqlPassword,
    database: 'ReviewsAndDrawers'
}); 

module.exports.connection = connection; 