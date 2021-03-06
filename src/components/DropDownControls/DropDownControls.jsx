import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DropDownControls.css';
import articlesAPIArray from '../../utilitiesData/articlesAPIArray.js';
import dropdown from '../../assets/dropdown.svg';
import dropdownhover from '../../assets/dropdownhover.svg';

export default class DropDownControls extends Component {
  constructor() {
    super();
    this.state = {
      query: 'abc-news-au',
      menuClass: 'hidden',
      placeholder: 'Choose your option',
      dropdown: dropdown
    };
  }

  onMouseIn = () => {
    this.setState({
      dropdown: dropdownhover
    });
  }

  onMouseOut = () => {
    this.setState({
      dropdown: dropdown
    });
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
    const { placeholder, dropdown, menuClass } = this.state;
    return (
      <section className='options-list-container'>

        <section className='cs-placeholder-container'>
          <p
            className='cs-placeholder'
            onClick={() => this.revealClass()}
            onMouseEnter={() => this.onMouseIn()}
            onMouseLeave={() => this.onMouseOut()}>
            {placeholder}
            <img src={dropdown} alt='Drop down menu icon.' />
          </p>

          <section className={menuClass}>
            <ul>
              {
                this.renderListItems(articlesAPIArray)
              }
            </ul>
          </section>

          <button
            className='news-submit-button'
            onClick={() => this.articlesFetch()}>
            Submit
          </button>
        </section>

      </section>
    );
  }
}

DropDownControls.propTypes = {
  retrieveArticles: PropTypes.func
};
