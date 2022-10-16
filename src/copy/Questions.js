import React, { useState } from "react";
import "./App.css";
import { Question } from "./Question";

const Questions = ({ questions, score, display, setUserAnswer }) => {
  const renderedQuestions = questions.map((question) => {
    const { id, title, answer } = question;

    return (
      <Question
        key={id}
        setUserAnswer={setUserAnswer}
        title={title}
        anserws={answer}
      />
    );
  });

  return (
    <div className="quiz-header" style={display}>
      <ul>{renderedQuestions}</ul>
    </div>
  );
};

export default Questions;
