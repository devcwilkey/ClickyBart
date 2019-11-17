import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

function Header(props) {
  const isWinner = props.winner
  const isEOG = props.eog
  let userMessage;
  console.log(isWinner);
  if ( isWinner) {
    userMessage = (
    <div>
      <h2 className="text-center theSimpsons ">¡Ay, caramba! You Won</h2>
      <p className="text-center theSimpsons ">Cl ick Bart Below to Start a New Game!</p>
    </div>)
} else {
  if (isEOG) {
    userMessage = (
    <div>
      <h2 className="text-center theSimpsons ">You Lost, Eat My Shorts!</h2>
      <p className="text-center theSimpsons ">Cl ick Bart Below to Start a New Game!</p>
  </div>)
  }
}


  return (
    <Jumbotron>
        <h1 className="theSimpsons text-center">
            Cl icky  Bart
        </h1>
       {userMessage}
    </Jumbotron>
  );
}

export default Header;
