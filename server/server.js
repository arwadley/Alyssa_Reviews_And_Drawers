let express = require('express'); 
let app = express(); 
let db = require('../database/db.js'); 
const port = 3020; 

db.connection.connect(() => console.log('connected to db')); 

app.use(express.json());

app.use(express.static(__dirname + '/../dist')); 

app.listen(port, () => console.log(`listening on port ${port}`)); 
