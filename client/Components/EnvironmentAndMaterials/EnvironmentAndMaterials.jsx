import React from 'react';
import EnvironmentAndMaterialsText from './EnvironmentAndMaterialsText.jsx';

export default class EnvironmentAndMaterials extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rotated: false,
      visible: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let currentRotation = this.state.rotated;
    let currentVisible = this.state.visible;
    this.setState({
      rotated: !currentRotation,
      visible: !currentVisible
    });
  }

  render() {
    return (
      <div onClick={this.clickHandler} className="aw_container_horizontal">
        <div className={'aw_x_icon ' + (this.state.rotated ? 'rotate' : 'rotate_original')}>+</div>
        <div className="aw_drawer_label_styling  aw_drawer_label_text">Environment & materials</div>
        {this.state.visible ? (
          <EnvironmentAndMaterialsText
            environmentAndMaterials={this.props.environmentAndMaterials}
          />
        ) : null}
      </div>
    );
  }
}
