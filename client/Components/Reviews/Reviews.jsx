import React from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewMetrics from './ReviewMetrics.jsx';

export default class Reviews extends React.Component {
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
      <div id="aw_review_drawer">
        <div onClick={this.clickHandler} className="aw_container_horizontal">
          <div className={'aw_x_icon ' + (this.state.clicked ? 'rotate' : 'rotate_original')}>
            +
          </div>
          <span className="aw_drawer_label_styling  aw_drawer_label_text">Reviews</span>
        </div>
        {this.state.clicked ? (
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
