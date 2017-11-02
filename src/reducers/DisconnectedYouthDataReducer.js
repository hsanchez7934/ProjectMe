const disconnectedYouthData = (state = [], action) => {
  switch (action.type) {
  case 'GET_DISCONNECTED_YOUTH_DATA':
    return action.disconnectedYouthDataArray;
  default:
    return state;
  }
};

export default disconnectedYouthData;
