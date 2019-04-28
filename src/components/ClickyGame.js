import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Banner from './Banner';
import images from '../images';


class Clickygame extends Component {
  state= {
    score: 0,
    highScore: 0,
    
    // store the class value to assign to naMessage based on a click
    navMsgColor: '',

    // contains all the messages a user will need
    navMessage: 'Click an image to get Schwifty!',

    // contains array of images
    allCharacters: this.shuffleArray(),

    // track clicks
    wasClicked: [],

    // shake the container if an incorrect guess
    shake: false
  };
// access the current state
// get random index based of the length of array left
// bind current context to Clicked to have current state
clickEvent = this.checkClicked.bind(this);

// shuffle images when loaded and when image is clicked
shuffleArray(){
  const newArr = images.slice();

  const shuffleArray = [];

  while (newArr.length > 0) {
    shuffleArray.push(
      newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]
    );
  }

  return shuffleArray;
}

checkClicked(clickedElem) {
  const prevState = this.state.wasClicked.slice();

  // shuffle the images
  const shuffled = this.shuffleArray();

  // track score
  let score = this.state.score;
  let highScore =  this.state.highScore;

  // increase the score if was correctly clicked
  if (!this.state.wasClicked.includes(clickedElem)) {
    // make new high score
    if (score === highScore) {
      score++;
      highScore++;

    } else{
      score++;
    }

    // keeps track of the wasClicked
    prevState.push(clickedElem);
  }

  // resets if user clicks wrong

  if (this.state.wasClicked.includes(clickedElem)) {
    let score = 0;
    return this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: 'incorrect',
      navMessage: 'Incorrect! Existence is pain!',
      allCharacters: shuffled,
      wasClicked: [],
      shake: true
    });
  }

    // if the user guesses correct
    this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: 'correct',
      navMessage: 'Good! We like what you got!',
      allCharacters: shuffled,
      wasClicked: prevState,
      shake: false
    });

    return setTimeout(() => this.setState({ navMsgColor: ''}), 500);
  }

  // pass score to the navbar
  // create a character component for each image
  // tracks the image for the click event
  render(){
    const state = this.state;
    return (
      <div>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgColor}
      />
      <Banner />
      <Container
        shake={state.shake}
        characters={state.allCharacters}
        clickEvent={this.clickEvent}
        />
        <Footer />
        </div>
    );
  }
}

export default Clickygame;