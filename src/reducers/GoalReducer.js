const goal = (state = [], action) => {
  switch (action.type) {
  case 'GET_GOALS':
    return action.goalsArray;
  default:
    return state;
  }
};

export default goal;
