import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
const axios = require('axios');
const baseURL = 'http://drawersreviews-env.bz3ikgcjmi.us-east-2.elasticbeanstalk.com/';

// const baseURL = 'localhost:3020';

export default class ReviewFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      overallRating: null,
      reviewTitle: '',
      reviewText: '',
      username: '',
      valueForMoney: null,
      productQuality: null,
      productAppearance: null,
      easeOfAssembly: null,
      worksAsExpected: null,
      recommended: null
    };
    this.addOverallRating = this.addOverallRating.bind(this);
    this.onChangeReviewText = this.onChangeReviewText.bind(this);
    this.onChangeReviewTitle = this.onChangeReviewTitle.bind(this);
    this.addValueForMoneyRating = this.addValueForMoneyRating.bind(this);
    this.addProductQualityRating = this.addProductQualityRating.bind(this);
    this.addProductAppearanceRating = this.addProductAppearanceRating.bind(this);
    this.addEaseOfAssemblyRating = this.addEaseOfAssemblyRating.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onClickRecommendedYes = this.onClickRecommendedYes.bind(this);
    this.onClickRecommendedNo = this.onClickRecommendedNo.bind(this);
    this.addWorksAsExpectedRating = this.addWorksAsExpectedRating.bind(this);
    this.processReviewSubmit = this.processReviewSubmit.bind(this);
    this.sendReviewToWindow = this.sendReviewToWindow.bind(this);
  }

  addOverallRating(nextValue) {
    this.setState({
      overallRating: nextValue
    });
  }
  addValueForMoneyRating(nextValue) {
    this.setState({
      valueForMoney: nextValue
    });
  }
  addProductQualityRating(nextValue) {
    this.setState({
      productQuality: nextValue
    });
  }
  addProductAppearanceRating(nextValue) {
    this.setState({
      productAppearance: nextValue
    });
  }
  addEaseOfAssemblyRating(nextValue) {
    this.setState({
      easeOfAssembly: nextValue
    });
  }
  addWorksAsExpectedRating(nextValue) {
    this.setState({
      worksAsExpected: nextValue
    });
  }

  onChangeReviewTitle(event) {
    this.setState({
      reviewTitle: event.target.value
    });
  }

  onChangeReviewText(event) {
    this.setState({
      reviewText: event.target.value
    });
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }
  onClickRecommendedYes() {
    this.setState({
      recommended: 1
    });
  }
  onClickRecommendedNo() {
    this.setState({
      recommended: 0
    });
  }

  sendReviewToWindow(review) {
    window.dispatchEvent(
      new CustomEvent('newReview', {
        bubbles: true,
        detail: review
      })
    );
  }

  processReviewSubmit() {
    let newReview = this.state;
    newReview.productId = this.props.itemId;
    let reviewToProxy = { id: this.props.itemId, newRating: this.state.overallRating };
    axios
      .post('/reviews', newReview, { baseURL: baseURL })
      .then(result => console.log(result))
      .then(this.sendReviewToWindow(reviewToProxy))
      .then(this.props.getReviews(this.props.itemId))
      .then(this.props.submitReview(this.props.itemId))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="aw_modal_transparency">
        <div className="aw_review_modal">
          <div className="aw_modal_text">
            <div className="aw_modal_line">
              <span className="aw_bottom_padding_star_label">Overall Rating:</span>
              <StarRatingComponent
                name="overallRating"
                starCount={5}
                value={this.state.overallRating}
                onStarClick={this.addOverallRating}
              />
            </div>
            <div className="aw_modal_line">
              <span className="aw_bottom_padding_star_label">Review Title:</span>
              <input
                className="aw_input_box"
                type="text"
                size="50"
                value={this.state.reviewTitle}
                onChange={this.onChangeReviewTitle}
                outline="none"
              ></input>
            </div>
            <div className="aw_modal_line">
              <span className="aw_bottom_padding_star_label">Review:</span>
              <input
                className="aw_input_box"
                type="text"
                size="80"
                value={this.state.reviewText}
                onChange={this.onChangeReviewText}
              ></input>
            </div>
            <div className="aw_modal_line">
              <span>Would you recommend this product to a friend?</span>
              <button
                className={
                  this.state.recommended === 1
                    ? 'aw_button_form aw_button_clicked_form'
                    : 'aw_button_form'
                }
                onClick={this.onClickRecommendedYes}
              >
                Yes
              </button>
              <button
                className={
                  this.state.recommended === 0
                    ? 'aw_button_form aw_button_clicked_form'
                    : 'aw_button_form'
                }
                onClick={this.onClickRecommendedNo}
              >
                No
              </button>
            </div>
            <div className="aw_modal_line">
              <span className="aw_bottom_padding_star_label">
                How do you rate the value for money?
              </span>
              <StarRatingComponent
                name="valueForMoney"
                starCount={5}
                value={this.state.valueForMoney}
                onStarClick={this.addValueForMoneyRating}
              />
            </div>
            <div className="aw_modal_line">
              <span className="aw_bottom_padding_star_label">
                How do you rate the product quality?
              </span>
              <StarRatingComponent
                name="productQuality"
                starCount={5}
                value={this.state.productQuality}
                onStarClick={this.addProductQualityRating}
              />
            </div>
            <div className="aw_modal_line">
              <span className="aw_bottom_padding_star_label">
                How do you rate the product appearance?
              </span>
              <StarRatingComponent
                name="productAppearance"
                starCount={5}
                value={this.state.productAppearance}
                onStarClick={this.addProductAppearanceRating}
              />
            </div>
            <div className="aw_modal_line">
              <span className="aw_bottom_padding_star_label">
                How do you rate the ease of assembly/installation?
              </span>
              <StarRatingComponent
                name="easeOfAssembly"
                starCount={5}
                value={this.state.easeOfAssembly}
                onStarClick={this.addEaseOfAssemblyRating}
              />
            </div>
            <div className="aw_modal_line">
              <span className="aw_bottom_padding_star_label">
                Rate whether the product works as you expected:
              </span>
              <StarRatingComponent
                name="productWorksAsExpected"
                starCount={5}
                value={this.state.worksAsExpected}
                onStarClick={this.addWorksAsExpectedRating}
              />
            </div>
            <div className="aw_modal_line">
              <span className="aw_bottom_padding_star_label">Nickname:</span>
              <input
                className="aw_input_box"
                type="text"
                value={this.state.username}
                onChange={this.onChangeUsername}
              ></input>
            </div>
            <div className="aw_button_center_form">
              <button className="aw_submit_button" onClick={this.processReviewSubmit}>
                Submit Review
              </button>
              <button className="aw_cancel_button" onClick={this.props.submitReview}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
