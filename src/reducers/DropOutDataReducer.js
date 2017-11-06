const dropOutData = (state = [], action) => {
  switch (action.type) {
  case 'GET_DROP_OUT_DATA':
    return action.dropOutDataArray;
  default:
    return state;
  }
};

export default dropOutData;
