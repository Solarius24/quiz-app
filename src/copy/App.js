import React, { useEffect, useState } from "react";
import Questions from "./Questions";
import ScoreCard from "./ScoreCard";
import axios from "axios";

const quizData = [
  {
    id: 1,
    title: "Which language runs in a web browser?",
    answer: ["Java", "C", "Python", "JavaScript"],
    correct: "JavaScript",
  },
  {
    id: 2,
    title: "What does CSS stand for?",
    answer: [
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
    answer: [
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
    answer: ["1996", "1995", "1994", "none of the above"],
    correct: "1995",
  },
];

const App = () => {
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState({ display: "none" });
  const [displayQ, setDisplayQ] = useState({ display: "" });
  const [userScore, setUserScore] = useState("");
  const [value, setValue] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  console.log("parent userAnswer", userAnswer);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await axios.get(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );

      return data;
    };
    dataFetch();
  }, []);

  const counterHandler = () => {
    if (counter < 3) {
      setCounter(counter + 1);
    } else if (counter >= 3) {
      setDisplayQ({ display: "none" });
      setDisplay({ display: "flex" });
    }
  };

  const finalScore = () => {
    let final = 0;
    if (userScore === quizData[counter].correct) {
      setValue(final + 25);
    }
  };

  const click = () => {
    counterHandler();
    finalScore();
  };

  return (
    <div>
      <ScoreCard display={display} value={value} />
      <div className="quiz-container">
        <h2>{counter + 1}/4</h2>
        <Questions
          display={displayQ}
          questions={quizData}
          score={(userScore) => setUserScore(userScore)}
          setUserAnswer={setUserAnswer}
        />
        <button onClick={click} style={displayQ}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
