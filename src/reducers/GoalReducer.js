const goal = (state = [], action) => {
  switch(action.type) {
    case 'GOAL':
      return [...state, action.goal];
    default:
     return state;
  }
};

export default goal;
