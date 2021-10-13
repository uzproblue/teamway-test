import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Button from "../Components/Button";
import { testResult } from "../backend-mockup";
function Result() {
  const history = useHistory();
  const [isFinished, setIsFinished] = useState(false);
  const [result, setResult] = useState();
  useEffect(() => {
    let result = 0;

    const answers = JSON.parse(localStorage.getItem("answers"));
    if (answers) {
      setIsFinished(true);
      Object.values(answers).map((answer) => (result = answer + result));
      setResult(result);
    } else {
      result = undefined;
    }
  }, []);

  return (
    <div className="result-page">
      <div className="container">
        <header>
          {isFinished ? (
            result > 1 ? (
              <p>Extrovert</p>
            ) : (
              <p>Introvert</p>
            )
          ) : (
            <h3> Teamway personality test</h3>
          )}
        </header>
        <div className="result-cont">
          {isFinished ? (
            result > 1 ? (
              <p>{testResult.extrovert}</p>
            ) : (
              <p>{testResult.introvert}</p>
            )
          ) : (
            <h3>Please Finish The Test To View Your Result! </h3>
          )}
        </div>
        <div className="buttons">
          <Button
            className="main-btn"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Result;
