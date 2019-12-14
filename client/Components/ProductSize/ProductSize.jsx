import React from 'react';
import ProductSizeText from './ProductSizeText.jsx';

export default class ProductSize extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      formattedData: null
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
      <div>
        <div onClick={this.clickHandler} className="aw_container_horizontal">
          <span className={'aw_x_icon ' + (this.state.clicked ? 'rotate' : 'rotate_original')}>
            +
          </span>
          <span className="aw_drawer_label_styling  aw_drawer_label_text">Product size</span>
        </div>
        {this.state.clicked ? <ProductSizeText sizeData={this.props.sizeData} /> : null}
      </div>
    );
  }
}
