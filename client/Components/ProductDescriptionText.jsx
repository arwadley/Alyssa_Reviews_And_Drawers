import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProductDescriptionText = props => {
  let descriptionArray = props.description.split('\n');
  return (
    <div className="aw_drop_down_container">
      <div className="aw_box_number">{props.boxNumber}</div>
      <TransitionGroup className="drawer">
        {descriptionArray.map((line, i) => {
          if (line == 'Designer') {
            return (
              <CSSTransition in={true} unmountOnExit timeout={1000} classNames="drawer" key={i}>
                <pre className={'aw_drop_down_text bold'} key={line}>
                  {line}
                </pre>
              </CSSTransition>
            );
          } else {
            return (
              <CSSTransition in={true} unmountOnExit timeout={1000} classNames="drawer" key={i}>
                <pre className={'aw_drop_down_text'} key={line}>
                  {line}
                </pre>
              </CSSTransition>
            );
          }
        })}
      </TransitionGroup>
    </div>
  );
};

export default ProductDescriptionText;
