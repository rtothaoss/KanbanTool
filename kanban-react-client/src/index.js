import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import errorReducer from './store/reducers/errorReducer';
import projectReducer from './store/reducers/projectReducer';
import backlogReducer from './store/reducers/backlogReducer';
import securityReducer from './store/reducers/securityReducer';
import jwt_decode from 'jwt-decode';
import setJWTToken from './securityUtils/setJWTToken';
import * as actionTypes from './store/actions/actionTypes';
import * as actions from './store/actions'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  errors: errorReducer,
  project: projectReducer,
  backlog: backlogReducer,
  security: securityReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const jwtToken = localStorage.jwtToken

if(jwtToken) {
  setJWTToken(jwtToken)
  const decoded_jwtToken = jwt_decode(jwtToken)
  store.dispatch({
    type: actionTypes.SET_CURRENT_USER,
    payload: decoded_jwtToken
  })

  const currentTime = Date.now() / 1000;
  if(decoded_jwtToken.exp < currentTime) {
    store.dispatch(actions.logout())
    window.location.href = '/'
  }


}

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
