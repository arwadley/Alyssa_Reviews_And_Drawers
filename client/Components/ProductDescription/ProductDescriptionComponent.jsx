import React from 'react';
import ProductDescriptionText from './ProductDescriptionText.jsx';

export default class ProductDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      visible: false
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let clickedStatus = this.state.clicked;
    let visibleStatus = this.state.visible;
    this.setState({
      clicked: !clickedStatus,
      visible: !visibleStatus
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.clickHandler} className="aw_container_horizontal">
          <div className={'aw_x_icon ' + (this.state.clicked ? 'rotate' : 'rotate_original')}>
            +
          </div>
          <div className="aw_drawer_label_styling  aw_drawer_label_text">Product description</div>
        </div>
        {this.state.visible ? (
          <ProductDescriptionText
            boxNumber={this.props.boxNumber}
            description={this.props.description}
            visible={this.state.visible}
          />
        ) : null}
      </div>
    );
  }
}
