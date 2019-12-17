import React from 'react';

const EnvironmentAndMaterialsText = props => {
  if (props.packageDetails) {
    let detailsArray = props.packageDetails.split('\n');
    return (
      <div className="aw_env_materials">
        {detailsArray.map((line, i) => {
          if (i === 0 || detailsArray[i - 1] === '') {
            return <div className="aw_drop_down_text bold">{line}</div>;
          } else if (line === '') {
            return (
              <div className="hidden" key={'environment' + i}>
                hiddenline
              </div>
            );
          } else {
            return <div className="aw_drop_down_text">{line}</div>;
          }
        })}
      </div>
    );
  } else {
    return <div className="aw_drop_down_text aw_drop_down_container">Not Available</div>;
  }
};

export default EnvironmentAndMaterialsText;
