const collegeEnrollmentData = (state = [], action) => {
  switch (action.type) {
  case 'GET_COLLEGE_ENROLLMENT_DATA':
    return action.collegeEnrollmentDataArray;
  default:
    return state;
  }
};

export default collegeEnrollmentData;
