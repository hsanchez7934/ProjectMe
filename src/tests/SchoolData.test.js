import React from 'react';
import { mount } from 'enzyme';
import govKey from '../govkey.js';
import config from './testSetup.js';
import * as actions from '../actions';
import SchoolData from '../components/SchoolData/SchoolData.jsx';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import dropOutMockData from '../utilitiesData/mockData/dropOutMockData.js';
import collegeEnrollmentMockData from '../utilitiesData/mockData/collegeEnrollmentMockData.js';
import disconnectedYouthMockData from '../utilitiesData/mockData/disconnectedYouthMockData.js';

describe(`SchoolData unit testing`, () => {
  let wrapper;
  let mockStore;
  let initialState;
  let store;

  const pause = () => {
    return new Promise(res => {
      setTimeout(() => {
        res();
      }, 0);
    });
  };

  beforeEach(async () => {
    fetchMock.get(`https://api.ed.gov/data/mbk-highschool-dropout?api_key=${govKey}`, {
      status: 200,
      body: dropOutMockData
    });
    fetchMock.get(`https://api.ed.gov/data/mbk-college-enrollment?api_key=${govKey}`, {
      status: 200,
      body: collegeEnrollmentMockData
    });
    fetchMock.get(`https://api.ed.gov/data/mbk-disconnected-youth?api_key=${govKey}`, {
      status: 200,
      body: disconnectedYouthMockData
    });

    initialState = {
      dropOutData: dropOutMockData,
      collegeEnrollmentData: collegeEnrollmentMockData,
      disconnectedYouthData: disconnectedYouthMockData
    };

    mockStore = configureStore();
    store = mockStore(initialState);

    actions.getQuote = () => ({ type: 'GET_QUOTE'});
    actions.createGoal = () => ({ type: 'ADD_GOAL'});
    actions.deleteGoal = () => ({ type: 'REMOVE_GOAL'});
    actions.getArticles = () => ({ type: 'GET_ARTICLES'});
    actions.dropOutData = () => ({ type: 'GET_DROP_OUT_DATA'});
    actions.collegeEnrollmentData = () => ({ type: 'GET_COLLEGE_ENROLLMENT_DATA'});
    actions.disconnectedYouthData = () => ({ type: 'GET_DISCONNECTED_YOUTH_DATA'});
    actions.getGoal = () => ({ type: 'GET_GOALS'});

    await pause();

    wrapper = mount(
      <SchoolData
        store={store} />
    );
  });

  test.skip(`should render an instance of SchoolData`, () => {
    console.log(wrapper.debug());
  });
});
