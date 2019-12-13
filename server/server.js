let express = require('express');
let app = express();
let db = require('../database/db.js');
const port = 3020;
let cors = require('cors')();

app.use(cors);

db.connection.connect(() => console.log('connected to db'));

app.use(express.json());

app.use(express.static(__dirname + '/../dist'));

app.use('/bundle', express.static(__dirname + '/../dist/bundle.js'));

app.use('/css', express.static(__dirname + '/../dist/stylesheet.css'));

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

app.post('/reviews', (req, res) => {
  let currentDate = getCurrentDate();
  db.writeNewReview(
    req.body.productId,
    req.body.overallRating,
    req.body.reviewTitle,
    req.body.reviewText,
    req.body.username,
    req.body.valueForMoney,
    req.body.productQuality,
    req.body.productAppearance,
    req.body.easeOfAssembly,
    req.body.worksAsExpected,
    req.body.recommended,
    currentDate,
    function(error, result) {
      if (error) {
        console.log(error);
        res.status(400).end();
      } else {
        res.status(200).send(result);
      }
    }
  );
});

app.listen(port, () => console.log(`listening on port ${port}`));

let getCurrentDate = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  console.log(year);
  let month = currentDate.getMonth();
  console.log(month + 1);
  let date = currentDate.getDate();
  console.log(date);
  let output = year + '';
  if (month === 12) {
    month = 1;
  } else {
    month += 1;
  }
  month = month.toString();
  if (month.length === 1) {
    output += '-0' + month;
  } else {
    output += '-' + month;
  }
  date = date.toString();
  if (date.length === 1) {
    output += '-0' + date;
  } else {
    output += '-' + date;
  }
  return output;
};
