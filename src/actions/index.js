import firebase from '../firebase.js';
import quotesApiKey from '../quoteskey.js';
import newsKey from '../newskey.js';

export const createGoal = goal => ({
  type: 'ADD_GOAL',
  goal
});

export const getGoal = goalsArray => ({
  type: 'GET_GOALS',
  goalsArray
});

export const deleteGoal = goalToRemove => ({
  type: 'REMOVE_GOAL',
  goalToRemove
});

export const getQuote = quoteArray => ({
  type: 'GET_QUOTE',
  quoteArray
});

export const quoteDB = quotesDBArray => ({
  type: 'QUOTES_DB',
  quotesDBArray
});

export const getArticles = articles => ({
  type: 'GET_ARTICLES',
  articles
});

export const retrieveArticles = query => dispatch => {
  fetch(`https://newsapi.org/v1/articles?source=${query}&sortBy=top`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      'X-Api-Key': newsKey
    }
  })
    .then(response => response.json())
    .then(parsedResponse => dispatch(getArticles(parsedResponse.articles)))
    .catch(error => error);
};

export const retrieveQuoteDB = () => dispatch => {
  const quoteRef = firebase.database().ref('quotes');
  quoteRef.on('value', (snapshot) => {
    const quotes = snapshot.val();
    let newState = [];
    for (let quote in quotes) {
      newState.push({
        id: quote,
        author: quotes[quote].contents.author,
        quote: quotes[quote].contents.quote
      });
    }
    // const newState = Object.entries(goals).map(([key, value]) => Object.assign({}, value, {id: key}))
    dispatch(quoteDB(newState));
  });
};

export const retrieveQuote = () => dispatch => {
  fetch('http://quotes.rest/quote/random/', {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "X-TheySaidSo-Api-Secret": quotesApiKey
    }
  })
    .then(response => response.json())
    .then(parsedResponse => dispatch(addQuote(parsedResponse)))
    .catch(error => error);
};

export const addQuote = quote => dispatch => {
  const quoteRef = firebase.database().ref('quotes');
  quoteRef.push(quote);
  dispatch(getQuote(quote));
};

export const addGoal = goal => dispatch => {
  const goalRef = firebase.database().ref('goals');
  goalRef.push(goal);
  dispatch(createGoal(goal));
};


export const retrieveGoals = () => dispatch => {
  const goalRef = firebase.database().ref('goals');
  goalRef.on('value', (snapshot) => {
    const goals = snapshot.val();
    let newState = [];
    for (let goal in goals) {
      newState.push({
        id: goal,
        title: goals[goal].title,
        body: goals[goal].body
      });
    }
    // const newState = Object.entries(goals).map(([key, value]) => Object.assign({}, value, {id: key}))
    dispatch(getGoal(newState));
  });
};

export const removeGoal = goalId => dispatch => {
  const goalRef = firebase.database().ref(`/goals/${goalId}`);
  goalRef.remove();
  dispatch(deleteGoal(goalId));
};
