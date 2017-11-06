import React from 'react';
import { mount } from 'enzyme';
import * as actions from '../actions';
import config from './testSetup.js';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import FeedYourMindContainer from '../components/FeedYourMindContainer/FeedYourMindContainer.jsx';
import newsArticlesMockData from '../utilitiesData/mockData/newsArticlesMockData.js';
import quoteMockData from '../utilitiesData/mockData/quoteMockData.js';
import 'jest';

describe(`FeedYourMindContainer unit testing`, () => {
  let wrapper;
  let mockStore;
  let initialState;
  let store;
  let retrieveArticles;
  let retrieveQuote;

  const pause = () => {
    return new Promise(res => {
      setTimeout(() => {
        res();
      }, 0);
    });
  };

  beforeEach(async () => {

    fetchMock.get('http://quotes.rest/quote/random/', {
      status: 200,
      body: quoteMockData
    });

    initialState = {
      quote: {
        quote: `The freedom fighters of Nicaragua
                ... are the moral equal of our
                Founding Fathers and the brave men
                and women of the French Resistance.`,
        author: `Ronald Reagan`
      },
      articles: newsArticlesMockData
    };

    retrieveArticles = jest.fn();
    retrieveQuote = jest.fn();

    mockStore = configureStore();
    store = mockStore(initialState, pause());

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
      <FeedYourMindContainer
        store={store}
        retrieveArticles={retrieveArticles}
        retrieveQuote={retrieveQuote} />
    );
  });

  test.skip(`should`, () => {
    console.log(wrapper.debug());
  });
});
