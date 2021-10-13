import React from "react";
import img from "../assets/img.jpg";
import Button from "../Components/Button";

import { useHistory } from "react-router-dom";
function Home() {
  const history = useHistory();
  return (
    <div className="home">
      <div className="container">
        <header>Teamway personality test</header>
        <div className="img-cont">
          <img src={img} alt="sampleimage" />
        </div>
        <div className="buttons">
          <Button
            className="main-btn"
            onClick={() => {
              history.push("/test");
            }}
          >
            Start Test
          </Button>
          <Button
            className="main-btn"
            onClick={() => {
              history.push("/result");
            }}
          >
            Your Result
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
