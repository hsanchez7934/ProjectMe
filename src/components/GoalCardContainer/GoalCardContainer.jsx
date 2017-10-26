import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalCard from '../GoalCard/GoalCard.jsx';
import { createGoal, getGoal, retrieveGoals } from '../../actions';

class GoalCardContainer extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.getGoals();
  }

  // componentWillRecieveProps(nextProps) {
  //   this.
  // }

  renderGoals = () => {
    console.log('test');
    const { goalsDB } = this.props;
    return goalsDB.map( (goal, index) =>
      <GoalCard
        key={index}
        goal={goal} />);
  }

  render() {
    return (
      <section>
        { this.renderGoals() }
      </section>
    );
  }
}

const mapStateToProps = store => ({
  goalsDB: store.goal
});

const mapDispatchToProps = dispatch => ({
  getGoals: () => dispatch(retrieveGoals())
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalCardContainer);
