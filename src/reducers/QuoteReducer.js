const quote = (state = [], action) => {
  switch (action.type) {
  case 'GET_QUOTE':
    return action.quoteArray;
  default:
    return state;
  }
};

export default quote;
