import { combineReducers } from 'redux';
import goal from './GoalReducer';
import quote from './QuoteReducer';

const rootReducer = combineReducers({
  goal,
  quote
});

export default rootReducer;
