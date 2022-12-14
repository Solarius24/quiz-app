import React, { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";
import axios from "axios";
import { NewQuestion } from "./NewQuestion";
import "./App.css";

const quizData = [
  {
    id: 1,
    title: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript",
  },
  {
    id: 2,
    title: "What does CSS stand for?",
    answers: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    correct: "Cars SUVs Sailboats",
  },
  {
    id: 3,
    title: "What does HTML stand for?",
    answers: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    correct: "Helicopters Terminals Motorboats Lamborginis",
  },
  {
    id: 4,
    title: "What year was JavaScript launched?",
    answers: ["1996", "1995", "1994", "none of the above"],
    correct: "1995",
  },
];

const App = () => {
  const [question, setQuestion] = useState(0);
  const [display, setDisplay] = useState({ display: "none" });
  const [displayQ, setDisplayQ] = useState({ display: "" });

  const [value, setValue] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  // useEffect(() => {
  //   const dataFetch = async () => {
  //     const data = await axios.get(
  //       "https://opentdb.com/api.php?amount=10&type=multiple"
  //     );

  //     return data;
  //   };
  //   dataFetch();
  // }, []);

  const counterHandler = () => {
    if (question < 3) {
      setQuestion(question + 1);
    } else if (question >= 3) {
      setDisplayQ({ display: "none" });
      setDisplay({ display: "flex" });
    }
  };

  const finalScore = () => {
    if (userAnswer === quizData[question].correct) {
      setValue(value + 25);
    }
  };

  const click = () => {
    counterHandler();
    finalScore();
  };

  return (
    <React.Fragment>
      <ScoreCard display={display} value={value} />
      <div className="quiz-container">
        <h2>{question + 1}/4</h2>
        <NewQuestion
          data={quizData[question]}
          display={displayQ}
          setUserAnswer={setUserAnswer}
        />
        <button onClick={click} style={displayQ}>
          Submit
        </button>
      </div>
    </React.Fragment>
  );
};

export default App;
