import * as actions from '../actions';

describe(`Actions unit testing`, () =>{


  beforeEach(() => {

  });

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

      const goal1 = {
        title: 'Get a job',
        body: 'Prepare resume, apply, network'
      };
      const goal2 = {
        title: 'Build dog house',
        body: 'Buy material, build'
      };

      const actionPayload = [goal1, goal2];

      const expectation = actions.getGoal(actionPayload);

      expect(expectation.type).toEqual('GET_GOALS');
      expect(expectation.goalsArray[0].title).toEqual('Get a job');
      expect(expectation.goalsArray[0].body)
        .toEqual('Prepare resume, apply, network');
      expect(expectation.goalsArray.length).toEqual(2);
    });

  test(`delete goal action creator should`, () => {

    const goal = {
      title: 'Gradute Turing',
      body: 'Study and work hard'
    };

    const expectation = actions.deleteGoal(goal);

    expect(expectation.type).toEqual('REMOVE_GOAL');
    expect(expectation.goalToRemove.title).toEqual('Gradute Turing');
    expect(expectation.goalToRemove.body).toEqual('Study and work hard');
  });

  test(`getQuote actions test`, () => {
    const quote1 = {
      quote: `What would you attempt to do
              if you knew you could not fail`,
      author: `me`
    };

    const quote2 = {
      quote: `The difference between who we are
              and who we want to be is the leap of
              faith in between`,
      author: `me`
    };

    const action = [quote1, quote2];

    const expectation = actions.getQuote(action);

    expect(expectation.type).toEqual('GET_QUOTE');
    expect(expectation.quoteArray.length).toEqual(2);
    expect(expectation.quoteArray[0].author).toEqual('me');
  });

  test(`quoteDB action creator should return quotes array`, () => {
    const quote1 = {
      quote: `What would you attempt to do
              if you knew you could not fail`,
      author: `me`
    };

    const quote2 = {
      quote: `The difference between who we are
              and who we want to be is the leap of
              faith in between`,
      author: `me`
    };

    const action = [quote1, quote2];

    const expectation = actions.quoteDB(action);

    expect(expectation.type).toEqual('QUOTES_DB');
    expect(expectation.quotesDBArray.length).toEqual(2);
    expect(expectation.quotesDBArray[0].author).toEqual('me');
  });

  test.skip(`getArticles action creator should return articles array`, () => {
    // const
  });
});
