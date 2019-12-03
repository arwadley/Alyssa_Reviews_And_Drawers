import React from 'react';

export default class ProductDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let clickedStatus = this.state.clicked;
    this.setState({
      clicked: !clickedStatus
    });
  }

  render() {
    if (!this.state.clicked) {
      return (
        <div onClick={this.clickHandler} className="aw_container_horizontal">
          <div className={'aw_x_icon rotate_original'}>+</div>
          <div className="aw_drawer_label_styling  aw_drawer_label_text">Product description</div>
        </div>
      );
    } else {
      console.log(this.props.description);
      return (
        <div>
          <div onClick={this.clickHandler} className="aw_container_horizontal">
            <div className={'aw_x_icon rotate'}>+</div>
            <div className="aw_drawer_label_styling  aw_drawer_label_text">Product description</div>
          </div>
          <div>{this.props.description}</div>
        </div>
      );
    }
  }
}
