import articles from '../reducers/ArticlesReducer.js';
describe(`reducers unit testing`, () => {
  let stateArray;
  beforeEach(() => {
    stateArray = [];
  });

  test(`article reducer should return action.articles
        when type is GET_ARTICLES`, () => {

        expect(articles(undefined, [])).toEqual(stateArray);

      });
})
;
