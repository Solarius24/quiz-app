import React from "react";

export const NewQuestion = ({ data, display, setUserAnswer }) => {
  const { answers } = data;
  const { title } = data;

  const onChangeHandler = (e) => {
    if (e.target.checked) {
      const value = e.target.value;
      setUserAnswer(value);
    }
    return setUserAnswer;
  };
  const renderAnswers = answers.map((answer, index) => {
    return (
      <li key={answer}>
        <input
          type="radio"
          value={answer}
          name="but"
          className="answer"
          onChange={onChangeHandler}
        />
        <label>{answer}</label>
      </li>
    );
  });

  return (
    <div className="quiz-header" style={display}>
      <h1>{title}</h1>
      <ul>{renderAnswers}</ul>
    </div>
  );
};
