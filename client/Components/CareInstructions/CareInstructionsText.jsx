import React from 'react';

const CareInstructionsText = props => {
  let instructionArray = props.instructions.split('\n');

  return (
    <div className="aw_drop_down_container">
      {instructionArray.map((line, i) => {
        return (
          <div className="aw_drop_down_text" key={'instruction' + i}>
            {line}
          </div>
        );
      })}
    </div>
  );
};

export default CareInstructionsText;
