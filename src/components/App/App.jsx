import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Controls from '../Controls/Controls.jsx';
import GoalCardContainer from '../GoalCardContainer/GoalCardContainer.jsx';
import FeedYourMindContainer from '../FeedYourMindContainer/FeedYourMindContainer.jsx';
import VideoIntro from '../VideoIntro/VideoIntro.jsx';
import SchoolData from '../SchoolData/SchoolData.jsx';
import LandingPage from '../LandingPage/LandingPage.jsx';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Route
        exact path='/'
        render={() => <VideoIntro /> } />
      <Route
        exact path='/landingpage'
        render={() => <LandingPage /> } />
      <Route
        exact path='/goalstracker'
        render={() => <GoalCardContainer /> } />
      <Route
        exact path='/feedyourmind'
        render={() => <FeedYourMindContainer /> } />
      <Route
        exact path='/schooldata'
        render={() => <SchoolData /> } />
    </div>
  </BrowserRouter>
);

export default App;
