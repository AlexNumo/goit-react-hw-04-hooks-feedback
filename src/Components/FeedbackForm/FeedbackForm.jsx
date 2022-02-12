import React, { useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Section from "./Section";

const FeedbackForm = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const obj = Object.keys({ good, neutral, bad });

  const PositiveFeedbackPercantage = () => {
    const percentage = (good*100)/total;
    return Math.ceil(percentage);
  };

  const percentage = PositiveFeedbackPercantage();

  const onLeaveFeedback = (event) => {
    const name = event.target.name
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1)
        break
      case 'bad':
        setBad(prevState => prevState + 1)
        break
      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={obj}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />) :
          <Notification
            message={"There is no feedback"} />
        }
      </Section>
    </>)
}

export default FeedbackForm;