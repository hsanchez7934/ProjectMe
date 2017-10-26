import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGoal } from '../../actions';

class Controls extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: ''
    }
  }


  
  render() {
    console.log(this.props);
    const { title, body } = this.state;
    return (
      <div>
        <input
          type='text'
          name='title'
          placeholder='Goal title here...'
          value={title}
          onChange='{}' />
        <input
          type='text'
          name='body'
          placeholder='Describe your goal bitch...'
          value={body}
          onChange='{}' />
        <input
          type='submit'
          value='Save'
          onClick=''/>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  goals: store.goals
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: goal => dispatch(createGoal(goal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
