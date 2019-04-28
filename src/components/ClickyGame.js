import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Banner from './Banner';
import images from './images';


class Clickygame extends Component {
  state= {
    score: 0,
    highscore: 0,
    
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





  
}