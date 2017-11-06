import * as actions from '../actions';
import newsArticlesMockData from '../utilitiesData/mockData/newsArticlesMockData.js';
import dropOutMockData from '../utilitiesData/mockData/dropOutMockData.js';
import collegeEnrollmentMockData from '../utilitiesData/mockData/collegeEnrollmentMockData.js';
import disconnectedYouthMockData from '../utilitiesData/mockData/disconnectedYouthMockData.js';
import goalsMockData from '../utilitiesData/mockData/goalsMockData.js';

describe(`Actions unit testing`, () =>{

  test(`createGoal action creator should return correct
        information and type`, () => {

      const goal = {
        title: 'Gradute Turing',
        body: 'Study and work hard'
      };

      const expectation = actions.createGoal(goal);

      expect(expectation.type).toEqual('ADD_GOAL');
      expect(expectation.goal.title).toEqual('Gradute Turing');
      expect(expectation.goal.body).toEqual('Study and work hard');
    });

  test(`getGoal action creator should return correct information
          and type`, () => {

      const expectation = actions.getGoal(goalsMockData);

      expect(expectation.type).toEqual('GET_GOALS');
      expect(expectation.goalsArray[0].title).toEqual('Get a job');
      expect(expectation.goalsArray[0].body)
        .toEqual('Prepare resume, apply, network');
      expect(expectation.goalsArray.length).toEqual(2);
    });

  test(`delete goal action creator should return
        the desire goal to be deleted with correct with
        action type and information`, () => {

      const goal = {
        title: 'Gradute Turing',
        body: 'Study and work hard'
      };

      const expectation = actions.deleteGoal(goal);

      expect(expectation.type).toEqual('REMOVE_GOAL');
      expect(expectation.goalToRemove.title).toEqual('Gradute Turing');
      expect(expectation.goalToRemove.body).toEqual('Study and work hard');
    });

  test(`getQuote actions should return correct type
        and return correct payload information`, () => {
      const quote1 = {
        quote: `What would you attempt to do
                if you knew you could not fail`,
        author: `me`
      };

      const action = quote1;

      const expectation = actions.getQuote(action);
      expect(expectation.type).toEqual('GET_QUOTE');
      expect(expectation.quote.author).toEqual('me');
    });


  test(`getArticles action creator should return correct
        action type and correct information`, () => {

      const expectation = actions.getArticles(newsArticlesMockData);

      expect(expectation.type).toEqual('GET_ARTICLES');
      expect(expectation.articles[0].title)
        .toEqual('Endangered Siberian Tiger Returns From Exile');
      expect(expectation.articles[0].author).toEqual('Sarah Gibbens');
      expect(expectation.articles.length).toEqual(2);
    });

  test(`dropOutData action creator should return correct
        action type and correct information`, () => {

      const expectation = actions.dropOutData(dropOutMockData);

      expect(expectation.type).toEqual('GET_DROP_OUT_DATA');
      expect(expectation.dropOutDataArray.length).toEqual(2);
      expect(expectation.dropOutDataArray[0].Count).toEqual('6234');
      expect(expectation.dropOutDataArray[0].Percentage).toEqual('23.5');
      expect(expectation.dropOutDataArray[0].Year).toEqual('2000');
    });

  test(`collegeEnrollmentData action creator should return
        correct type and correct information`, () => {

      const expectation = actions.collegeEnrollmentData(
        collegeEnrollmentMockData
      );

      expect(expectation.type).toEqual('GET_COLLEGE_ENROLLMENT_DATA');
      expect(expectation.collegeEnrollmentDataArray.length).toEqual(2);
      expect(expectation.collegeEnrollmentDataArray[0].Count).toEqual('9452');
      expect(expectation.collegeEnrollmentDataArray[0].Percentage)
        .toEqual('35.5');
      expect(expectation.collegeEnrollmentDataArray[0].Year).toEqual('2000');
    });

  test(`disconnectedYouthData action creator should return
        correct type and correct information`, () => {

      const expectation = actions.disconnectedYouthData(
        disconnectedYouthMockData
      );

      expect(expectation.type).toEqual('GET_DISCONNECTED_YOUTH_DATA');
      expect(expectation.disconnectedYouthDataArray.length).toEqual(2);
      expect(expectation.disconnectedYouthDataArray[0].Count).toEqual('3676.6');
      expect(expectation.disconnectedYouthDataArray[0].Percentage)
        .toEqual("13.9");
      expect(expectation.disconnectedYouthDataArray[0].Year).toEqual('2000');
    });
});
