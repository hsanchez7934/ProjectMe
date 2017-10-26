import React from 'react';
import { connect } from 'react-redux';

const GoalCard = ({ title, body }) => (
  <article className='goal-card'>
    <h3 className='goal-title'> {title} </h3>
    <p className='goal-description'> {body} </p>
  </article>
)

export default GoalCard;
