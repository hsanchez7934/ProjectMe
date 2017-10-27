const articles = (state = [], action) => {
  switch (action.type) {
  case 'GET_ARTICLES':
    return action.articles;
  default:
    return state;
  }
};

export default articles;
