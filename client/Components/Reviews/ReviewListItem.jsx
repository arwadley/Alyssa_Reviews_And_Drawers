import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ReviewListItem = props => {
  const oneDay = 24 * 60 * 60 * 1000;
  if (props.review) {
    let postedDate = props.review.posted_date.split(/[- :T]/);
    postedDate = new Date(
      Number(postedDate[0]),
      Number(postedDate[1] - 1),
      Number(postedDate[2], 0, 0, 0)
    );
    let currentDate = new Date();
    let difference = (currentDate - postedDate) / oneDay;
    console.log(difference);

    return (
      <div>
        <StarRatingComponent
          name="overallRating"
          editing={false}
          value={props.review.overall_rating}
          starCount={5}
          emptyStarColor={'#E8E8E8'}
        />
        <span className="review_list_text">{props.review.user_name}</span>
        <span>{}</span>
      </div>
    );
  }
};

export default ReviewListItem;
