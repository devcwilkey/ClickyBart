import React, { Component } from "react";
import NavBart from "../NavBart";
import BartButton from "../BartButton"
import data from "../../data.json";
import Container from "react-bootstrap/Container";
import Header from "../Header";

class Game extends Component {
  state = {
    data,
    currentScore: 0,
    topScore: 0,
    winner: false,
    endOfGame: false
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  handleCorrectGuess = newData => {
    console.log("correct")
    const { currentScore, topScore } = this.state;
    const newScore = currentScore + 1;
    const newTopScore = Math.max(newScore, topScore);
    console.log(newScore);
    this.setState({
      data: this.shuffleData(newData),
      currentScore: newScore,
      topScore: newTopScore
    });
    if(newScore === 12){
        this.handleMaxScore(this.state.data)
    }  
  };

  handleIncorrectGuess = data => {
    console.log("inCorrect")
    this.setState({
      data: this.resetData(data),
      currentScore: 0,
      endOfGame: true
    });
  };

  handleMaxScore = data => {
    console.log("You Have Won");
    this.setState({
      data: this.resetData(data),
      currentScore: 0,
      winner: true,
      endOfGame: true
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  shuffleData = data => {
    console.log(data);
    console.log(this.state);
    for(const [index] of data.entries()){
      const newIndex = Math.floor(Math.random() * (index + 1));
      const tempData = data[index];
      data[index] = data[newIndex];
      data[newIndex] = tempData;
    }
    return data;
  };

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    this.setState({
      winner: false
    })
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  render() {
    return (
        <div> 
          <NavBart currentScore={this.state.currentScore} topScore={this.state.topScore} />
            <Header winner={this.state.winner} eog={this.state.endOfGame}/>
          <Container className="align-content-center pt-3">
            {this.state.data.map(item => (
              <BartButton
                key={item.id}
                id={item.id}
                image={item.image}
                bartClick={this.handleItemClick}
              />
            ))}
          </Container>
        </div>
    )
  }
}

export default Game;