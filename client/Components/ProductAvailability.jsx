import React from 'react';

export default class ProductAvailability extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let currentClicked = this.state.clicked;
    this.setState({
      clicked: !currentClicked
    });
  }

  render() {
    return (
      <div onClick={this.clickHandler} id="aw_last_drawer">
        <div className={'aw_x_icon ' + (this.state.clicked ? 'rotate' : 'rotate_original')}>+</div>
        <span className="aw_drawer_label_styling  aw_drawer_label_text">Product availability</span>
      </div>
    );
  }
}
