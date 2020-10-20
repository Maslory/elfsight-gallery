import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.sass';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import initialState from './redux/initialState'
import {albumName, albums} from './redux/reducers'

const history = createBrowserHistory();

const logger = (store: any) => (next: any) => (action: any) => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
}
const saver = (store: any) => (next: any) => (action: any) => {
  let result = next(action)
  // localStorage['redux-store'] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (state: any = initialState) =>
  applyMiddleware(logger, saver)(createStore)(
      combineReducers({
        albumName, albums
      }),
      // (localStorage['redux-store']) ?
      //     JSON.parse(localStorage['redux-store']) :
      state
  )

const store = storeFactory()

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router history={history}>
    <App />
    </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
