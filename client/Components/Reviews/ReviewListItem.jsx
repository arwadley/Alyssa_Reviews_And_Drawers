import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import ReviewListItemBars from './ReviewListItemBars.jsx';

const ReviewListItem = props => {
  if (props.review) {
    let postedDate = props.review.posted_date.split(/[- :T]/);
    let timeSincePosted = calculateTimeSincePosted(postedDate);

    console.log(props.review.product_value_for_money);
    return (
      <div className="aw_review_list_box aw_row">
        <div className="aw_column aw_review_text_side">
          <div>
            <StarRatingComponent
              name="overallRating"
              editing={false}
              value={props.review.overall_rating}
              starCount={5}
              emptyStarColor={'#E8E8E8'}
            />
            <span className="aw_review_list_text aw_review_list_formatting">
              {props.review.user_name}
            </span>
            <span className="aw_review_list_text aw_review_list_formatting aw_light_italic">
              · {timeSincePosted}
            </span>
          </div>
          <div className="aw_review_list_title">{props.review.review_title}</div>
          <div className="aw_review_list_text">{props.review.review_text}</div>
          {props.review.product_recommended ? (
            <div>
              <span className="aw_circle_icon">✔</span>
              <span className="aw_review_list_text bold">Yes, </span>
              <span className="aw_review_list_text">I recommend this product</span>
            </div>
          ) : (
            <div>
              <span className="aw_circle_icon_x">x</span>
              <span className="aw_review_list_text bold">No, </span>
              <span className="aw_review_list_text">I do not recommend this product</span>
            </div>
          )}
          <div>
            <span className="aw_review_list_text">Helpful?</span>
            <button
              className="aw_helpful_buttons"
              onClick={() => props.clickUpdateHelpful(props.review, 1, 0)}
            >
              Yes · {props.review.review_helpful_yes}
            </button>
            <button
              className="aw_helpful_buttons"
              onClick={() => props.clickUpdateHelpful(props.review, 0, 1)}
            >
              No · {props.review.review_helpful_no}
            </button>
            <button className="aw_helpful_buttons">Report</button>
          </div>
        </div>
        <div>
          <ReviewListItemBars
            valueForMoney={props.review.product_value_for_money}
            productQuality={props.review.product_quality}
            appearance={props.review.product_appearance}
            easeOfAssembly={props.review.product_ease_of_assembly}
            worksAsExpected={props.review.product_works_as_expected}
          />
        </div>
      </div>
    );
  }
};

let calculateTimeSincePosted = function(postedDate) {
  const oneDay = 24 * 60 * 60 * 1000;
  postedDate = new Date(
    Number(postedDate[0]),
    Number(postedDate[1] - 1),
    Number(postedDate[2], 0, 0, 0)
  );
  let currentDate = new Date();
  let difference = (currentDate - postedDate) / oneDay;
  if (difference < 1) {
    return ' today';
  }
  if (difference < 30) {
    return Math.floor(difference) + ' days ago';
  } else {
    return Math.floor(difference / 30) + ' months ago';
  }
};

export default ReviewListItem;
