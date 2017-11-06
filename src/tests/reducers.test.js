import * as actions from '../actions';
import articles from '../reducers/ArticlesReducer.js';
import collegeEnrollmentData from '../reducers/CollegeEnrollmentDataReducer.js';
import disconnectedYouthData from '../reducers/disconnectedYouthDataReducer.js';
import dropOutData from '../reducers/DropOutDataReducer.js';
import goal from '../reducers/GoalReducer.js';
import quote from '../reducers/QuoteReducer.js';
import newsArticlesMockData from '../utilitiesData/mockData/newsArticlesMockData.js';
import dropOutMockData from '../utilitiesData/mockData/dropOutMockData.js';
import collegeEnrollmentMockData from '../utilitiesData/mockData/collegeEnrollmentMockData.js';
import disconnectedYouthMockData from '../utilitiesData/mockData/disconnectedYouthMockData.js';
import goalsMockData from '../utilitiesData/mockData/goalsMockData.js';

describe(`reducers unit testing`, () => {

  let stateArray;
  let stateObject;

  beforeEach(() => {
    stateArray = [];
    stateObject = {};
  });

  test(`articles reducer should return action.articles
        when type is GET_ARTICLES`, () => {

      expect(articles(undefined, [])).toEqual(stateArray);

      const action = actions.getArticles(newsArticlesMockData);
      const expectation = action.articles;

      expect(articles(undefined, action)).toEqual(expectation);
    });

  test(`collegeEnrollmentData reducer should return
        action.collegeEnrollmentDataArray when action.type is
        GET_COLLEGE_ENROLLMENT_DATA`, () => {

      expect(collegeEnrollmentData(undefined, [])).toEqual(stateArray);

      const action = actions.collegeEnrollmentData(collegeEnrollmentMockData);
      const expectation= action.collegeEnrollmentDataArray;

      expect(collegeEnrollmentData(undefined, action)).toEqual(expectation);
    });

  test(`disconnectedYouthData reducer should return
        action.disconnectedYouthDataArray when action.type is
        GET_DISCONNECTED_YOUTH_DATA`, () => {

      expect(disconnectedYouthData(undefined, [])).toEqual(stateArray);

      const action = actions.disconnectedYouthData(disconnectedYouthMockData);
      const expectation= action.disconnectedYouthDataArray;

      expect(disconnectedYouthData(undefined, action)).toEqual(expectation);
    });

  test(`dropOutData reducer should return
        action.collegeEnrollmentDataArray when action.type is
        GET_COLLEGE_ENROLLMENT_DATA`, () => {

      expect(dropOutData(undefined, [])).toEqual(stateArray);

      const action = actions.dropOutData(dropOutMockData);
      const expectation= action.dropOutDataArray;

      expect(dropOutData(undefined, action)).toEqual(expectation);
    });

  test(`goal reducer should return action.goalsArray
        when action.type is GET_GOALS`, () => {

      expect(goal(undefined, [])).toEqual(stateArray);

      const action = actions.getGoal(goalsMockData);
      const expectation = action.goalsArray;

      expect(goal(undefined, action)).toEqual(expectation);
    });

  test(`quote reducer should return action.quote
        when action.type is GET_QUOTE`, () => {

      expect(quote(undefined, {})).toEqual(stateObject);

      const action = actions.getQuote(
        {
          quote: `What would you attempt to do
                  if you knew you could not fail`,
          author: `me`
        }
      );

      const expectation = action.quote;

      expect(quote(undefined, action)).toEqual(expectation);
    });
});
