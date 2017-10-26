import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const GoalCard = ({ goal }) => {
  const { title, body } = goal;
  return (
    <article className='goal-card'>
      <h3 className='goal-title'>{title}</h3>
      <p className='goal-description'>{body}</p>
    </article>
  );
};

GoalCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  goal: PropTypes.object
};

export default GoalCard;
