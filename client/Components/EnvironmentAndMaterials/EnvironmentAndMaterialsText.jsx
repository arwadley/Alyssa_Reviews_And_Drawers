import React from 'react';

const EnvironmentAndMaterialsText = props => {
  let EnvAndMatArray = props.environmentAndMaterials.split('\n');
  console.log(EnvAndMatArray);
  return (
    <div className="aw_env_materials">
      {EnvAndMatArray.map((line, i) => {
        if (line == 'Environment' || line == 'Materials') {
          return (
            <div className="aw_drop_down_text bold" key={'environment' + i}>
              {line}
            </div>
          );
        } else if (line === '') {
          return <div className="hidden">hiddenline</div>;
        } else {
          return (
            <div className="aw_drop_down_text" key={'environment' + i}>
              {line}
            </div>
          );
        }
      })}
    </div>
  );
};

export default EnvironmentAndMaterialsText;
