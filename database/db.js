let mysql = require('mysql');
let sqlPassword = require('../config');  

let connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: sqlPassword,
    database: 'ReviewsAndDrawers'
}); 

module.exports.connection = connection; 