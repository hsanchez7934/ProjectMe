import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropDownControls.css';
import articlesAPIArray from '../../utilitiesData/articlesAPIArray.js';

export default class DropDownControls extends Component {
  constructor() {
    super();
    this.state = {
      query: 'abc-news-au',
      menuClass: 'hidden',
      placeholder: 'Choose your option'
    };
  }

  renderListItems = array => (
    array.map( (articleDataObject, index) => {
      const {dataValue, dataText} = articleDataObject;
      return (
        <li
          onClick={(event) => this.hiddenClass(event)}
          data-value={dataValue}
          key={index}>
          {dataText}
        </li>
      );
    })
  )

  articlesFetch = () => {
    this.setState({
      placeholder: 'Choose your option'
    });
    this.props.retrieveArticles(this.state.query);
  }

  revealClass = () => {
    const { menuClass } = this.state;
    if (menuClass === 'hidden') {
      this.setState({
        menuClass: 'options-list-reveal'
      });
    } else if (menuClass === 'options-list-reveal') {
      this.setState({
        menuClass: 'hidden'
      });
    }
  }

  hiddenClass = (event) => {
    this.setState({
      menuClass: 'hidden',
      placeholder: event.target.innerText,
      query: event.target.dataset.value
    });
  }

  render() {
    return (
      <section className='options-list-container'>

        <section className='cs-placeholder-container'>
          <p
            className='cs-placeholder'
            onClick={() => this.revealClass()}>
            {this.state.placeholder}
          </p>
          <button
            className='news-submit-button'
            onClick={() => this.articlesFetch()}>
            Submit
          </button>
        </section>

        <section className={this.state.menuClass}>
          <ul className='left-side-options'>
            {
              this.renderListItems(articlesAPIArray[0])
            }
          </ul>

          <ul className='right-side-options'>
            {
              this.renderListItems(articlesAPIArray[1])
            }
          </ul>
        </section>

      </section>
    );
  }
}

DropDownControls.propTypes = {
  retrieveArticles: PropTypes.func
};
