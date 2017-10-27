import { combineReducers } from 'redux';
import goal from './GoalReducer';
import quote from './QuoteReducer';
import quotesDB from './QuotesDBReducer';
import articles from './ArticlesReducer';

const rootReducer = combineReducers({
  goal,
  quote,
  quotesDB,
  articles
});

export default rootReducer;
