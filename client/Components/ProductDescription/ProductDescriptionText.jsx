import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProductDescriptionText = props => {
  if (props.description) {
    let descriptionArray = props.description.split('\n');
    return (
      <div className="aw_drop_down_container">
        <div className="aw_box_number">{props.boxNumber}</div>
        {descriptionArray.map((line, i) => {
          if (line == 'Designer') {
            return (
              <pre className={'aw_drop_down_text bold fadeIn'} key={i}>
                {line}
              </pre>
            );
          } else {
            return (
              <pre className={'aw_drop_down_text fadeIn'} key={i}>
                {line}
              </pre>
            );
          }
        })}
      </div>
    );
  } else {
    return <div className="aw_drop_down_text aw_drop_down_container">Not Available</div>;
  }
};

export default ProductDescriptionText;
