import React from 'react';
import { mount } from 'enzyme';
import 'jest';
import config from './testSetup.js';
import GoalCard from '../components/GoalCard/GoalCard.jsx';

describe(`GoalCard unit testing`, () => {
  let wrapper;
  let goal;
  let mockFunction;

  beforeEach(() => {

    goal = {
      title: 'Workout',
      body: 'Go to gym',
      id: '1234',
      date: 'November 6, 2017',
      time: '07:27:57'
    };

    mockFunction = jest.fn();

    wrapper = mount(
      <GoalCard
        goal={goal}
        removeGoal={mockFunction} />
    );
  });

  test(`should create an instance of GoalCard`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test(`should match snapshot`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
