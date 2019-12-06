import React from 'react';

const ReviewListItemBars = props => {
  return (
    <div className="aw_bar_margin aw_column2">
      <div>
        <div className="aw_review_list_text">Value for money</div>
        <span className="aw_review_bars aw_selected_golden"></span>
        <span
          className={
            'aw_review_bars ' + (props.valueForMoney >= 2 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.valueForMoney >= 3 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.valueForMoney >= 4 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.valueForMoney >= 5 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
      </div>
      <div>
        <div className="aw_review_list_text">Product Quality</div>
        <span className="aw_review_bars aw_selected_golden"></span>
        <span
          className={
            'aw_review_bars ' + (props.productQuality >= 2 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.productQuality >= 3 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.productQuality >= 4 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.productQuality >= 5 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
      </div>
      <div>
        <div className="aw_review_list_text">Appearance</div>
        <span className="aw_review_bars aw_selected_golden"></span>
        <span
          className={
            'aw_review_bars ' + (props.appearance >= 2 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.appearance >= 3 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.appearance >= 4 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.appearance >= 5 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
      </div>
      <div>
        <div className="aw_review_list_text">Ease of assembly/ installation</div>
        <span className="aw_review_bars aw_selected_golden"></span>
        <span
          className={
            'aw_review_bars ' + (props.easeOfAssembly >= 2 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.easeOfAssembly >= 3 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.easeOfAssembly >= 4 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' + (props.easeOfAssembly >= 5 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
      </div>
      <div>
        <div className="aw_review_list_text">Works as expected</div>
        <span className="aw_review_bars aw_selected_golden"></span>
        <span
          className={
            'aw_review_bars ' +
            (props.worksAsExpected >= 2 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' +
            (props.worksAsExpected >= 3 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' +
            (props.worksAsExpected >= 4 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
        <span
          className={
            'aw_review_bars ' +
            (props.worksAsExpected >= 5 ? 'aw_selected_golden' : 'aw_unselected')
          }
        ></span>
      </div>
    </div>
  );
};

export default ReviewListItemBars;
