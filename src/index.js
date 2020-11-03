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
    first_name: null,
    last_name: null,
    email: null,
    playlists: [{title: null}]
  },
  search: {
    input_phrase: null,
    matching_phrase: null,
    current_song_index: null,
    order_matters: true,
    song: {
      full_title: null, 
      id: null, 
      lyrics: null, 
      artist_id: null, 
      url: null, 
      image: null, 
      title: null,
      youtube_id: null
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
          first_name: null,
          last_name: null,
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
