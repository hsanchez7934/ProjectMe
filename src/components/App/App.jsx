import React, { Component } from 'react';
import './App.css';
import Controls from '../Controls/Controls.jsx';
import GoalCardContainer from '../GoalCardContainer/GoalCardContainer.jsx';
import FeedYourMindContainer from '../FeedYourMindContainer/FeedYourMindContainer.jsx';
import Hero from '../Hero/Hero.jsx';
import SchoolData from '../SchoolData/SchoolData.jsx';
import newsKey from '../../newskey.js';
import govKey from '../../govkey.js';
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        {/* <Hero /> */}
        {/* <Controls /> */}
        {/* <GoalCardContainer /> */}
        {/* <FeedYourMindContainer /> */}
        <SchoolData />
      </div>
    );
  }
}

export default App;
