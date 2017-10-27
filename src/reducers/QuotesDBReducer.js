const quotesDB = (state = [], action) => {
  console.log(action);
  switch (action.type) {
  case 'QUOTES_DB':
    return action.quotesDBArray;
  default:
    return state;
  }
};

export default quotesDB;
