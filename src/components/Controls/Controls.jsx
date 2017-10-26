import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGoal } from '../../actions';
import PropTypes from 'prop-types';

class Controls extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    };
  }

  handleOnChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value
    });
  }

  submitOnClick = goal => {
    this.props.handleSubmit(goal);
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
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
          type='submit'
          value='Save'
          onClick={() => this.submitOnClick(this.state)} />
      </div>
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
