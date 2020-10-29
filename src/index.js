import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let initialState = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
  },
  search: {
    query: null,
    currentArtist: null,
    currentSong: null,
    matchingPhrase: null,
    currentSongIndex: null,
    orderMatters: true,
    error: null,
    saved: false,
    resultDisplayed: false,
  },
};


// RETURN VALUE OF REDUCER BECOMES THE NEW STATE
let reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOGIN':
      let userToBeAdded = action.payload
      return {
        ...state, 
        user: userToBeAdded
      }

    case 'LOGOUT':
      return {
        ...state, 
        user: state.user
      }

    default:
      return state
  }

}

let storeObj = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <Provider store={storeObj}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
