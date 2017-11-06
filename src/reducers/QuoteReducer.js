const quote = (state = {}, action) => {
  switch (action.type) {
  case 'GET_QUOTE':
    return action.quote;
  default:
    return state;
  }
};

export default quote;
