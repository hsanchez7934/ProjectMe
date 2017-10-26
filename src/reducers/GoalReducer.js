const goal = (state = [], action) => {
  console.log(action.type);
switch (action.type) {
  case 'ADD_GOAL':
    return action.goal;
  case 'GET_GOALS':
    return action.goals;
  default:
    return state;
  }
};

export default goal;
