import firebase from '../firebase.js';

export const createGoal = goal => ({
  type: 'ADD_GOAL',
  goal
});

export const getGoal = goals => ({
  type: 'GET_GOALS',
  goals
});

export const addGoal = goal => dispatch => {
  const goalRef = firebase.database().ref('goals');
  goalRef.push(goal);
  dispatch(createGoal(goal));
};

export const retrieveGoals = () => dispatch => {
  const goalRef = firebase.database().ref('goals');
  goalRef.on('value', (snapshot) => {
    let goals = snapshot.val();
    let newState = [];
    for (let goal in goals) {
      newState.push({
        id: goal,
        title: goals[goal].title,
        body: goals[goal].body
      });
    }
    dispatch(getGoal(newState));
  });
};
