import React, { useState, useEffect } from "react";
import Button from "../Components/Button";
import { useHistory } from "react-router-dom";
import { test } from "../backend-mockup";
import Version from "../Components/Version";
function Test() {
  const history = useHistory();

  const [currentTest, setCurrentTest] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [result, setResult] = useState(0);

  function nextTest() {
    test.length - 1 > currentTest && setCurrentTest(currentTest + 1);
  }
  function previousTest() {
    currentTest > 0 && setCurrentTest(currentTest - 1);
  }
  useEffect(() => {
    result && localStorage.setItem("answers", JSON.stringify(result));
  }, [result]);
  return (
    <div className="test-page">
      <div className="container">
        <header className="test-header">
          Are you an introvert or an extrovert?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="back-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              history.push("/");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </header>
        <div className="test-cont">
          <h3>{test[currentTest].question}</h3>

          <div className="versions">
            {test[currentTest].answers.map((answer, id) => (
              <div
                key={id}
                className="version"
                onClick={() => {
                  setSelectedAnswers({ ...selectedAnswers, [currentTest]: id });
                  setResult({
                    ...result,
                    [currentTest]: test[currentTest].answers[id].result,
                  });
                }}
              >
                <Version
                  key={id}
                  className={
                    id === selectedAnswers[currentTest]
                      ? "selected version"
                      : "version"
                  }
                >
                  {answer.text}
                </Version>
              </div>
            ))}
          </div>
        </div>
        <div className="test-buttons">
          <Button
            className="main-btn"
            disabled={currentTest === 0}
            onClick={() => previousTest()}
          >
            Back
          </Button>
          <Button
            className="main-btn"
            disabled={currentTest === test.length - 1}
            onClick={() => nextTest()}
          >
            Next
          </Button>
          <Button
            className="main-btn"
            disabled={Object.keys(selectedAnswers).length !== 3}
            onClick={() => history.push("/result")}
          >
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Test;
