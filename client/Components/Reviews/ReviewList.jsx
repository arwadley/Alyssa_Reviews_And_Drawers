import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = props => {
  return (
    <div className="aw_drop_down_container aw_no_left_padding">
      {props.reviews.map((review, i) => {
        return (
          <ReviewListItem
            clickUpdateHelpful={props.clickUpdateHelpful}
            review={review}
            key={'review' + i}
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
