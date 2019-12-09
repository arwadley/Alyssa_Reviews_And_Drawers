import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewMetrics from './ReviewMetrics.jsx';

export default class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rotated: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    let currentRotation = this.state.rotated;
    this.setState({
      rotated: !currentRotation
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.clickHandler} className="aw_container_horizontal">
          <div className={'aw_x_icon ' + (this.state.rotated ? 'rotate' : 'rotate_original')}>
            +
          </div>
          <span className="aw_drawer_label_styling  aw_drawer_label_text">Reviews</span>
        </div>
        {this.state.rotated ? (
          <div>
            <ReviewMetrics
              newReviewHandler={this.props.newReviewHandler}
              reviews={this.props.reviews}
            />
            <ReviewList
              clickUpdateHelpful={this.props.clickUpdateHelpful}
              reviews={this.props.reviews}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
