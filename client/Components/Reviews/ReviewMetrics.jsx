import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import ReviewListItemBars from './ReviewListItemBars.jsx';

const ReviewMetrics = props => {
  let averages = calculateAveragePerCategory(props.reviews);
  let overallScoreCounter = overallScorePercent(props.reviews);
  let pixels = calculatePixels(overallScoreCounter, props.reviews.length);
  return (
    <div className="aw_drop_down_container">
      <div className="aw_review_top_bar  aw_no_left_padding">
        <span className="aw_review_list_title">Reviews</span>
        <button onClick={() => props.newReviewHandler()} id="submit_review_button">
          Write a review
        </button>
      </div>
      <div className="aw_row">
        <div className="aw_column">
          <div className="aw_review_list_text overall_rating_bars">Rating Snapshot</div>
          <div className="overall_rating_bars">
            <span className="aw_review_list_text">5&#11089;</span>
            <div className="aw_overall_rating_percent" style={{ width: pixels[5] }}></div>
            <div className="aw_overall_rating_noFill" style={{ width: 300 - pixels[5] }}></div>
          </div>
          <div className="overall_rating_bars">
            <span className="aw_review_list_text">4&#11089;</span>
            <div className="aw_overall_rating_percent" style={{ width: pixels[4] }}></div>
            <div className="aw_overall_rating_noFill" style={{ width: 300 - pixels[4] }}></div>
          </div>
          <div className="overall_rating_bars">
            <span className="aw_review_list_text">3&#11089;</span>
            <div className="aw_overall_rating_percent" style={{ width: pixels[3] }}></div>
            <div className="aw_overall_rating_noFill" style={{ width: 300 - pixels[3] }}></div>
          </div>
          <div className="overall_rating_bars">
            <span className="aw_review_list_text">2&#11089;</span>
            <div className="aw_overall_rating_percent" style={{ width: pixels[2] }}></div>
            <div className="aw_overall_rating_noFill" style={{ width: 300 - pixels[2] }}></div>
            <div className="overall_rating_bars">
              <span className="aw_review_list_text">1&#11089;</span>
              <div className="aw_overall_rating_percent" style={{ width: pixels[1] }}></div>
              <div className="aw_overall_rating_noFill" style={{ width: 300 - pixels[1] }}></div>
            </div>
          </div>
        </div>
        <div className="aw_column2">
          <div className="aw_review_list_text aw_ratings_bottom_margin">
            Averages Customer Ratings
          </div>
          <div>
            <span className="aw_review_list_text">Overall </span>
            <StarRatingComponent
              name="overallRating"
              editing={false}
              value={averages.overall_rating}
              starCount={5}
              emptyStarColor={'#E8E8E8'}
            />
            <ReviewListItemBars
              valueForMoney={averages.product_value_for_money}
              productQuality={averages.product_quality}
              appearance={averages.product_appearance}
              easeOfAssembly={averages.product_ease_of_assembly}
              worksAsExpected={averages.product_works_as_expected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const calculateAveragePerCategory = reviews => {
  let averages = {};
  for (let i = 0; i < reviews.length; i++) {
    averages.overall_rating =
      averages.overall_rating !== undefined
        ? averages.overall_rating + reviews[i].overall_rating
        : reviews[i].overall_rating;
    averages.product_value_for_money =
      averages.product_value_for_money !== undefined
        ? averages.product_value_for_money + reviews[i].product_value_for_money
        : reviews[i].product_value_for_money;
    averages.product_quality =
      averages.product_quality !== undefined
        ? averages.product_quality + reviews[i].product_quality
        : reviews[i].product_quality;
    averages.product_appearance =
      averages.product_appearance !== undefined
        ? averages.product_appearance + reviews[i].product_appearance
        : reviews[i].product_appearance;
    averages.product_ease_of_assembly =
      averages.product_ease_of_assembly !== undefined
        ? averages.product_ease_of_assembly + reviews[i].product_ease_of_assembly
        : reviews[i].product_ease_of_assembly;
    averages.product_works_as_expected =
      averages.product_works_as_expected !== undefined
        ? averages.product_works_as_expected + reviews[i].product_works_as_expected
        : reviews[i].product_works_as_expected;
  }
  for (let key in averages) {
    averages[key] = averages[key] / reviews.length;
  }
  return averages;
};

const overallScorePercent = reviews => {
  let count = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  for (let i = 0; i < reviews.length; i++) {
    let currentRating = reviews[i].overall_rating;
    count[currentRating] += 1;
  }
  return count;
};

const calculatePixels = (count, number) => {
  let pixels = {};
  for (let key in count) {
    pixels[key] = (count[key] / number) * 300;
  }
  return pixels;
};

export default ReviewMetrics;
