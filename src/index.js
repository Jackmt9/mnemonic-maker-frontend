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
    matchingPhrase: null,
    currentSongIndex: null,
    orderMatters: true,
    song: {
      fullTitle: null, 
      id: null, 
      lyrics: null, 
      artistId: null, 
      url: null, 
      image: null, 
      title: null,
      youtubeId: null
    }
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

    case 'MOUNT_SEARCH':
      let search = action.payload
      return {
        ...state,
        search: search
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
