import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoalCard from '../GoalCard/GoalCard.jsx';
import Controls from '../Controls/Controls.jsx';
import { retrieveGoals, removeGoal, retrieveQuote } from '../../actions';
import PropTypes from 'prop-types';
import './GoalCardContainer.css';

class GoalCardContainer extends Component {

  componentWillMount() {
    this.props.getGoals();
    this.props.retrieveQuote();
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
    const { quote } = this.props;
    return (
      <section className='goalcards-container-parent-node'>
        <header className='goalcard-container-header'>
          <section className='goalcards-header-top-section'>
            <h1 className='goalcard-container-header-title'>Goal Tracker</h1>
          </section>

          <section className='goalcards-header-bottom-section'>
            <p className='goal-card-quote'>{quote.quote}</p>
            <p className='goal-card-quote-author'>{quote.author}</p>
          </section>
        </header>
        <Controls />
        <section className='goal-card-container'>
          {
            this.renderGoals()
          }
        </section>
      </section>
    );
  }
}

GoalCardContainer.propTypes = {
  goalsDB: PropTypes.array,
  getGoals: PropTypes.func,
  removeGoal: PropTypes.func,
  quote: PropTypes.object,
  retrieveQuote: PropTypes.fun
};

const mapStateToProps = store => ({
  goalsDB: store.goal,
  quote: store.quote
});

const mapDispatchToProps = dispatch => ({
  getGoals: () => dispatch(retrieveGoals()),
  removeGoal: id => dispatch(removeGoal(id)),
  retrieveQuote: () => dispatch(retrieveQuote())
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalCardContainer);
