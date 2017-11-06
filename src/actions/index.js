import firebase from '../firebase.js';
import quotesApiKey from '../quoteskey.js';
import newsKey from '../newskey.js';
import govKey from '../govkey.js';
import { cleanArray } from '../utilitiesData/helperFunctions.js';

export const createGoal = goal => ({
  type: 'ADD_GOAL',
  goal
});

export const getGoal = goalsArray => ({
  type: 'GET_GOALS',
  goalsArray
});

export const deleteGoal = goalToRemove => ({
  type: 'REMOVE_GOAL',
  goalToRemove
});

export const getQuote = quote => ({
  type: 'GET_QUOTE',
  quote
});

export const getArticles = articles => ({
  type: 'GET_ARTICLES',
  articles
});

export const dropOutData = dropOutDataArray => ({
  type: 'GET_DROP_OUT_DATA',
  dropOutDataArray
});

export const collegeEnrollmentData = collegeEnrollmentDataArray => ({
  type: 'GET_COLLEGE_ENROLLMENT_DATA',
  collegeEnrollmentDataArray
});

export const disconnectedYouthData = disconnectedYouthDataArray => ({
  type: 'GET_DISCONNECTED_YOUTH_DATA',
  disconnectedYouthDataArray
});

export const fetchDropOutData = () => dispatch => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://api.ed.gov/data/mbk-highschool-dropout?api_key=${govKey}`;
  fetch(proxyurl + url)
    .then(response => response.json())
    .then(res => dispatch(dropOutData(cleanArray(res.resources, 5))))
    .catch(error => error);
};

export const fetchCollegeEnrollmentData = () => dispatch => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://api.ed.gov/data/mbk-college-enrollment?api_key=${govKey}`;
  fetch(proxyurl + url)
    .then(response => response.json())
    .then(res => dispatch(collegeEnrollmentData(cleanArray(res.resources, 6))))
    .catch(error => error);
};

export const fetchDisconnectedYouthData = () => dispatch => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = `https://api.ed.gov/data/mbk-disconnected-youth?api_key=${govKey}`;
  fetch(proxyurl + url)
    .then(response => response.json())
    .then(res => dispatch(disconnectedYouthData(cleanArray(res.resources, 5))))
    .catch(error => error);
};

export const retrieveArticles = query => dispatch => {
  fetch(`https://newsapi.org/v1/articles?source=${query}&sortBy=top`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      'X-Api-Key': newsKey
    }
  })
    .then(response => response.json())
    .then(parsedResponse => dispatch(getArticles(parsedResponse.articles)))
    .catch(error => error);
};

export const retrieveQuote = () => dispatch => {
  fetch('http://quotes.rest/quote/random/', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "X-TheySaidSo-Api-Secret": quotesApiKey
    }
  })
    .then(response => response.json())
    .then(parsedResponse => dispatch(getQuote(parsedResponse.contents)))
    .catch(error => error);
};

export const addGoal = goal => dispatch => {
  const goalRef = firebase.database().ref('goals');
  goalRef.push(goal);
  dispatch(createGoal(goal));
};

export const retrieveGoals = () => dispatch => {
  const goalRef = firebase.database().ref('goals');
  goalRef.on('value', (snapshot) => {
    const goals = snapshot.val();
    let newState = [];
    for (let goal in goals) {
      newState.unshift({
        id: goal,
        title: goals[goal].title,
        body: goals[goal].body,
        date: goals[goal].date,
        day: goals[goal].day,
        time: goals[goal].time
      });
    }
    // const newState = Object.entries(goals).map(([key, value]) => Object.assign({}, value, {id: key}))
    dispatch(getGoal(newState));
  });
};

export const removeGoal = goalId => dispatch => {
  const goalRef = firebase.database().ref(`/goals/${goalId}`);
  goalRef.remove();
  dispatch(deleteGoal(goalId));
};
