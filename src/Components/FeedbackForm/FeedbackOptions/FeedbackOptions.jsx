import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({onLeaveFeedback, options}) => (
    <form>
    <label>
      {options.map((option) => (
        <button key={option} type='button' onClick={onLeaveFeedback} name={option}>{ option }</button>
      ))}
    </label>
  </form>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  handleBtnClick: PropTypes.func,
  good: PropTypes.func,
  neutral: PropTypes.func,
  bad: PropTypes.func,
};