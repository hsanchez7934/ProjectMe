import React from 'react';
import PropTypes from 'prop-types';
import './GoalCard.css';

const GoalCard = ({ goal, removeGoal }) => {
  const { title, body, id, date, day, time } = goal;
  return (
    <article className='goal-card' id={id}>

      <section className='card-left-side'>
        <section className='goal-title-container'>
          <h3 className='goal-title'>{title}</h3>
        </section>
        <section className='goal-card-date-container'>
          <p className='weekday'>{day}</p>
          <p className='date'>{date}</p>
          <p className='time'>{time}</p>
        </section>
      </section>
      
      <section className='card-right-side'>
        <p className='goal-description'>{body}</p>
        <button
          onClick={() => removeGoal(id)}
          className='delete-button'>
          Delete
        </button>
      </section>

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
