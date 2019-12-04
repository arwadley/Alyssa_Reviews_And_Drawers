import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewList = props => {
  return (
    <div>
      {props.reviews.map((review, i) => {
        return <ReviewListItem review={review} key={'review' + i} />;
      })}
    </div>
  );
};

export default ReviewList;
