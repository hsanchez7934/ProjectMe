import React from 'react';
import { mount } from 'enzyme';
import config from './testSetup.js';
import LandingPage from '../components/LandingPage/LandingPage.jsx';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';

describe(`GoalCardContainer unit testing`, () => {
  let wrapper;
  beforeEach(() => {

    const context = createRouterContext();
    const childContextTypes = {
      router: PropTypes.object
    };

    wrapper = mount(
      <LandingPage />,
      {context, childContextTypes}
    );
  });

  test(`should render an instance of LandingPage`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test(`should render section node, h4 node, and p node`, () => {
    const section = wrapper.find('section').at(0);
    const h4 = wrapper.find('h4').at(0);
    const pNode = wrapper.find('p');

    expect(section.exists()).toEqual(true);
    expect(h4.exists()).toEqual(true);
    expect(pNode.exists()).toEqual(true);
  });
});
