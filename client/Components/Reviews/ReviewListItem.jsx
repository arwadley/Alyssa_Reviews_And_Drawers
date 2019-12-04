import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ReviewListItem = props => {
  return (
    <div>
      <StarRatingComponent
        name="overallRating"
        editing={false}
        value={props.review.overall_rating}
        starCount={5}
      />
    </div>
  );
};

export default ReviewListItem;
