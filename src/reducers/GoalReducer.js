const goal = (state = [], action) => {
  switch(action.type) {
    case 'ADD_GOAL':
      return [...state, action.goal];
    case 'GET_GOALS':
      return [...state]
    default:
     return state;
  }
};

export default goal;
