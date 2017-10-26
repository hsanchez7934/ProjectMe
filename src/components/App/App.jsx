import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.jsx';
import GoalCardContainer from '../GoalCardContainer/GoalCardContainer.jsx';
import apiKey from '../../key.js';

class App extends Component {

  componentDidMount() {
    fetch('http://quotes.rest/quote/random/', {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "X-TheySaidSo-Api-Secret": apiKey
      }
    })
    .then(response => response.json())
    .catch(err => err);
  }

  render() {
    return (
      <div className="App">
        <Controls />
        <GoalCardContainer />
      </div>
    );
  }
}

export default App;
