import { combineReducers } from 'redux';
import goal from './GoalReducer';
const rootReducer = combineReducers({
  goal
});

export default rootReducer;
