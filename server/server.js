let express = require('express'); 
let app = express(); 

const port = 3020; 

app.use(express.json());

app.use(express.static(__dirname + '/../dist')); 

app.listen(port, () => console.log(`listening on port ${port}`)); 
