import { combineReducers } from 'redux';
import goal from './GoalReducer';
import quote from './QuoteReducer';
import articles from './ArticlesReducer';
import dropOutData from './DropOutDataReducer';
import collegeEnrollmentData from './CollegeEnrollmentDataReducer';
import disconnectedYouthData from './DisconnectedYouthDataReducer';

const rootReducer = combineReducers({
  goal,
  quote,
  articles,
  dropOutData,
  collegeEnrollmentData,
  disconnectedYouthData
});

export default rootReducer;
