import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import { hoverLink } from '../../utilitiesData/helperFunctions.js';

export default class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      information: hoverLink()
    };
  }

  onMouseEnter = query => (
    this.setState({
      information: hoverLink(query)
    })
  );

  onMouseLeave = () => (
    this.setState({
      information: hoverLink()
    })
  )

  renderLinks = (query, title) => (
    <h4
      className='page-links'
      onMouseEnter={() => this.onMouseEnter(query)}
      onMouseLeave={() => this.onMouseLeave()}>
      {title}
    </h4>
  )

  render() {
    const { information } = this.state;
    return (
      <section id='landing-page-container'>
        <section id='landing-page-left-side'>
          <Link to={'/feedyourmind'} className='links'>
            {
              this.renderLinks('feedyourmind', 'Feed Your Mind')
            }
          </Link>
          <Link to={'/schooldata'} className='links'>
            {
              this.renderLinks('schooldata', 'School Data')
            }
          </Link>
          <Link to={'/goalstracker'} className='links'>
            {
              this.renderLinks('goalstracker', 'Goals Tracker')
            }
          </Link>
        </section>
        <section id='landing-page-right-side'>
          <p id='link-information'>
            {information}
          </p>
        </section>
      </section>
    );
  }
}
