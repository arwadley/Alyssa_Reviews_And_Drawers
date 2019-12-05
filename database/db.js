let mysql = require('mysql');
let sqlPassword = require('../config');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: sqlPassword,
  database: 'ReviewsAndDrawers'
});

let retrieveItem = (itemId, callback) => {
  connection.query('SELECT * FROM items WHERE id=?', [itemId], function(error, result) {
    callback(error, result);
  });
};

let retrieveReviews = (itemId, callback) => {
  connection.query('SELECT * FROM reviews WHERE product_id=?', itemId, function(error, result) {
    callback(error, result);
  });
};

let updateHelpfulReviews = (reviewId, yesCount, noCount, callback) => {
  connection.query(
    'UPDATE reviews SET review_helpful_yes=?, review_helpful_no=? WHERE review_id=?',
    [yesCount, noCount, reviewId],
    function(error, result) {
      if (error) {
        callback(error, null);
      } else {
        callback(error, result);
      }
    }
  );
};

module.exports.connection = connection;
module.exports.retrieveItem = retrieveItem;
module.exports.retrieveReviews = retrieveReviews;
module.exports.updateHelpfulReviews = updateHelpfulReviews;
