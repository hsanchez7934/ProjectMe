const quote = (state = [], action) => {
  switch (action.type){
  case 'GET_QUOTE':
    return [...state, action.quote];
  default:
    return state;
  }
};

export default quote;
