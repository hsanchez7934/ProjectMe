import firebase from '../firebase.js';
import apiKey from '../key.js';

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

export const retrieveQuote = () => dispatch => {
  fetch('http://quotes.rest/quote/random/', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "X-TheySaidSo-Api-Secret": apiKey
    }
  })
    .then(response => response.json())
    .then(parsedResponse => dispatch(getQuote(parsedResponse)))
    .catch(err => err);
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
      newState.push({
        id: goal,
        title: goals[goal].title,
        body: goals[goal].body
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
