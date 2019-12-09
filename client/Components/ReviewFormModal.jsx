import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
const axios = require('axios');

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

  processReviewSubmit() {
    let newReview = this.state;
    newReview.productId = this.props.itemId;
    axios
      .post('/reviews', newReview)
      .then(result => console.log(result))
      .then(this.props.getReviews())
      .then(this.props.submitReview())
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="aw_modal_transparency">
        <div className="aw_review_modal">
          <div className="aw_modal_text">
            <div>
              <span>Overall Rating:</span>
              <StarRatingComponent
                name="overallRating"
                starCount={5}
                value={this.state.overallRating}
                onStarClick={this.addOverallRating}
              />
            </div>
            <div>
              <span>Review Title:</span>
              <input
                type="text"
                value={this.state.reviewTitle}
                onChange={this.onChangeReviewTitle}
              ></input>
            </div>
            <div>
              <span>Review:</span>
              <input
                type="text"
                value={this.state.reviewText}
                onChange={this.onChangeReviewText}
              ></input>
            </div>
            <div>
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
            <div>
              <span>How do you rate the value for money?</span>
              <StarRatingComponent
                name="valueForMoney"
                starCount={5}
                value={this.state.valueForMoney}
                onStarClick={this.addValueForMoneyRating}
              />
            </div>
            <div>
              <span>How do you rate the product quality?</span>
              <StarRatingComponent
                name="productQuality"
                starCount={5}
                value={this.state.productQuality}
                onStarClick={this.addProductQualityRating}
              />
            </div>
            <div>
              <span>How do you rate the product appearance?</span>
              <StarRatingComponent
                name="productAppearance"
                starCount={5}
                value={this.state.productAppearance}
                onStarClick={this.addProductAppearanceRating}
              />
            </div>
            <div>
              <span>How do you rate the ease of assembly/installation?</span>
              <StarRatingComponent
                name="easeOfAssembly"
                starCount={5}
                value={this.state.easeOfAssembly}
                onStarClick={this.addEaseOfAssemblyRating}
              />
            </div>
            <div>
              <span>Rate whether the product works as you expected:</span>
              <StarRatingComponent
                name="productWorksAsExpected"
                starCount={5}
                value={this.state.worksAsExpected}
                onStarClick={this.addWorksAsExpectedRating}
              />
            </div>
            <div>
              <span>Nickname:</span>
              <input
                type="text"
                value={this.state.username}
                onChange={this.onChangeUsername}
              ></input>
            </div>
            <div className="aw_form_submit_button">
              <button className="aw_modal_text" onClick={this.processReviewSubmit}>
                Submit Review
              </button>
              <button className="aw_modal_text" onClick={this.props.submitReview}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
