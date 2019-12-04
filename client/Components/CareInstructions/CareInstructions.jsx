import React from 'react';
import CareInstructionsText from './CareInstructionsText.jsx';

export default class CareInstructions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      visible: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let currentClicked = this.state.clicked;
    let currentVisible = this.state.visible;
    this.setState({
      clicked: !currentClicked,
      visible: !currentVisible
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.clickHandler} className="aw_container_horizontal">
          <div className={'aw_x_icon ' + (this.state.clicked ? 'rotate' : 'rotate_original')}>
            +
          </div>
          <span className="aw_drawer_label_styling  aw_drawer_label_text">Care instructions</span>
        </div>
        {this.state.visible ? (
          <CareInstructionsText instructions={this.props.instructions} />
        ) : null}
      </div>
    );
  }
}
