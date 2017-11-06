import React from 'react';
import App from '../components/App/App.jsx';
import FeedYourMindContainer from '../components/FeedYourMindContainer/FeedYourMindContainer.jsx';
import config from './testSetup.js';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';

describe(`App component unit testing`, () => {
  let wrapper;
  let mockStore;
  let initialState;
  let store;
  let div;
  let controls;

  beforeEach(() => {
    initialState = {};
    mockStore = configureStore();
    store = mockStore(initialState);

    const context = createRouterContext();
    const childContextTypes = {
      router: PropTypes.object
    };
    
    wrapper = mount(<App store={store} />, {context, childContextTypes});
    div = wrapper.find('div');

  });

  test(`should render an instance of App`, () => {
    expect(wrapper.exists()).toEqual(true);
  });

  test(`it should render a parent div with class name "App"`, () => {
    expect(div.exists()).toEqual(true);
    expect(div.type()).toEqual('div');
    expect(div.hasClass('App')).toEqual(true);
  });

  test(`should render an instance of VideoIntro`, () => {
    const videoIntro = wrapper.find('VideoIntro');
    expect(videoIntro.exists()).toEqual(true);
  });

});
