import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalCard from '../GoalCard/GoalCard.jsx';
import { createGoal, getGoal } from '../../actions';

class GoalCardContainer extends Component{
  constructor() {
    super();
  }

  componentDidMount(){
    // this.renderGoals(this.props.goals)
  }

  renderGoals = (goalsArray) => {
    goalsArray.map(goal => {
      return (
        <GoalCard goal={goal}/>
      )
    })
  }

  render(){
    return (
      <section>
        { this.renderGoals(this.props.goals) }
      </section>
    )
  }
}

const mapStateToProps = store => ({
  goals: store.goal
})

const mapDispatchToProps = dispatch => ({
  getGoals: goals => dispatch(getGoal(goals))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalCardContainer);
