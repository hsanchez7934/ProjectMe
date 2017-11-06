import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGoal } from '../../actions';
import PropTypes from 'prop-types';
import './Controls.css';
import {
  returnDay,
  returnDate,
  returnTime
} from '../../utilitiesData/helperFunctions.js';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      day: null,
      date: null,
      time: null
    };
  }

  handleOnChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value,
      day: returnDay(),
      date: returnDate(),
      time: returnTime()
    });
  }

  submitOnClick = goal => {
    this.props.handleSubmit(goal);
    this.setState({
      title: '',
      body: '',
      day: null,
      date: null,
      time: null
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <section className='controls-container'>
        <h3 className='controls-title'>Goals Tracker</h3>
        <input
          type='text'
          name='title'
          placeholder='Declare your goal...'
          value={title}
          onChange={(event) => this.handleOnChange(event)} />
        <input
          type='text'
          name='body'
          placeholder='Steps to achieve...'
          value={body}
          onChange={(event) => this.handleOnChange(event)} />
        <input
          id='submit-button'
          type='submit'
          value='Save'
          onClick={() => this.submitOnClick(this.state)} />
      </section>
    );
  }
}

Controls.propTypes = {
  handleSubmit: PropTypes.func
};

const mapStateToProps = store => ({
  goals: store.goal
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: goal => dispatch(addGoal(goal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
