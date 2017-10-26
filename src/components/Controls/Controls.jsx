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

  submitOnChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value
    })
  }

  submitOnClick = (goal) => {
    this.props.handleSubmit(goal);
    this.setState({
      title: '',
      body: ''
    })
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
          onChange={ (event) => this.submitOnChange(event) } />
        <input
          type='text'
          name='body'
          placeholder='Describe your goal bitch...'
          value={body}
          onChange={ (event) => this.submitOnChange(event) }  />
        <input
          type='submit'
          value='Save'
          onClick={ () => this.submitOnClick(this.state) }/>
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
