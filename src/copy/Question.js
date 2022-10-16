import React from "react";

export const Question = ({ setUserAnswer, anserws, title }) => {
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setUserAnswer((prevState) => {
      console.log("prevState", prevState);
      return [...prevState, value];
    });
  };

  const renderAnswers = anserws.map((answer, index) => {
    return (
      <>
        <li key={index}>
          <input
            type="radio"
            name="but"
            value={answer}
            className="answer"
            onChange={onChangeHandler}
          />
          <label>{answer}</label>
        </li>
      </>
    );
  });

  return (
    <>
      <h1>{title}</h1>
      {renderAnswers}
    </>
  );
};
