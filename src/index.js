import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

let initialState = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    email: null
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
    resultDisplayed: false
  },
};

// RETURN VALUE OF REDUCER BECOMES THE NEW STATE
let reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'MOUNT_USER':
      let user = action.payload.user
      return {
          ...state, 
          user: user
      }

    case 'UNMOUNT_USER':
      return {
        ...state, 
        user: {
          id: null,
          firstName: null,
          lastName: null,
          email: null,
        }
      }

    default:
      return state
  }

}

let storeObj = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={storeObj}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
