import React from 'react';
import PropTypes from 'prop-types';

const GoalCard = ({ goal, removeGoal }) => {
  const { title, body, id } = goal;
  return (
    <article className='goal-card' id={id}>
      <h3 className='goal-title'>{title}</h3>
      <p className='goal-description'>{body}</p>
      <button onClick={() => removeGoal(id)}>Remove</button>
    </article>
  );
};

GoalCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  goal: PropTypes.object,
  removeGoal: PropTypes.func
};

export default GoalCard;
