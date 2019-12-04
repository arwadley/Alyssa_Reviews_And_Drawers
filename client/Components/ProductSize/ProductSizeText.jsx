import React from 'react';

const ProductSizeText = props => {
  if (props.sizeData) {
    console.log(props.sizeData);
    return (
      <div>
        {props.sizeData.map((lineItem, i) => {
          return (
            <div className="aw_drop_down_container" key={i + lineItem[1]}>
              <span className="aw_drop_down_text bold">{lineItem[0]}</span>
              <span className="aw_drop_down_text">{lineItem[1]}</span>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="aw_drop_down_text aw_drop_down_container">Not Available</div>;
  }
};

export default ProductSizeText;
