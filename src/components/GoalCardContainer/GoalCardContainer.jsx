import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalCard from '../GoalCard/GoalCard.jsx';
import { retrieveGoals, removeGoal } from '../../actions';
import PropTypes from 'prop-types';

class GoalCardContainer extends Component {
  
  componentWillMount() {
    this.props.getGoals();
  }

  renderGoals = () => {
    const { goalsDB, removeGoal} = this.props;
    return goalsDB.map( (goal, index) =>
      <GoalCard
        key={index}
        goal={goal}
        removeGoal={removeGoal} />);
  }

  render() {
    return (
      <section>
        {
          this.renderGoals()
        }
      </section>
    );
  }
}

GoalCardContainer.propTypes = {
  goalsDB: PropTypes.array,
  getGoals: PropTypes.func,
  removeGoal: PropTypes.func
};

const mapStateToProps = store => ({
  goalsDB: store.goal
});

const mapDispatchToProps = dispatch => ({
  getGoals: () => dispatch(retrieveGoals()),
  removeGoal: id => dispatch(removeGoal(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalCardContainer);
