export const createGoal = goal => ({
    type: 'ADD_GOAL',
    goal
});

export const getGoal = goals => ({
    type: 'GET_GOALS',
    goals
});
