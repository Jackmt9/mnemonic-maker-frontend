import React from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let initialState = {
  pets: [
    {
      id: 29,
      name: "Heihei",
      breed: "Chicken"
    }
  ]
}


// RETURN VALUE OF REDUCER BECOMES THE NEW STATE
let reducer = (state = initialState, action) => {

  switch (action.type) {
    case "ADD_ONE_PET":
      let thePetToBeAdded = action.payload
      let copyOfPets = [...state.pets, thePetToBeAdded]

      return {
        ...state,
        pets: copyOfPets
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
