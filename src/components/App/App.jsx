import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.jsx';
import GoalCardContainer from '../GoalCardContainer/GoalCardContainer.jsx';

class App extends Component {

  componentDidMount() {
    fetch('http://quotes.rest/qod/categories')
    .then(response => response.json())
    .then(response => console.log(response))
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
