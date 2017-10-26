import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.jsx';
import GoalCardContainer from '../GoalCardContainer/GoalCardContainer.jsx';
import apiKey from '../../key.js';
import Hero from '../Hero/Hero.jsx';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Hero />
        <Controls />
        <GoalCardContainer />
      </div>
    );
  }
}

export default App;
