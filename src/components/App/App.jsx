import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.jsx';
import GoalCardContainer from '../GoalCardContainer/GoalCardContainer.jsx'

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // fetch('http://api.forismatic.com/api/1.0/')
    // .then(response => response.json())
    // .then(response => console.log(response))
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
