let express = require('express');
let app = express();
let db = require('../database/db.js');
const port = 3020;

db.connection.connect(() => console.log('connected to db'));

app.use(express.json());

app.use(express.static(__dirname + '/../dist'));

app.get('/item', (req, res) => {
  let itemId = req.query.itemId;
  db.retrieveItem(itemId, function(error, result) {
    if (error) {
      res.status(404).end();
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/reviews', (req, res) => {
  let itemId = req.query.itemId;
  db.retrieveReviews(itemId, function(error, result) {
    if (error) {
      res.status(404).send(error);
    } else {
      res.status(200).send(result);
    }
  });
});

app.put('/reviews', (req, res) => {
  console.log(req.body);
  db.updateHelpfulReviews(req.body.reviewId, req.body.yesAdd, req.body.noAdd, function(
    error,
    result
  ) {
    if (error) {
      res.status(400).end();
    } else {
      res.status(200).send(result);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
