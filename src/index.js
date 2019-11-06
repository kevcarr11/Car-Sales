import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { reducer as mustangReducer } from "./reducers";
import { reducer as teslaReducer } from "./reducers/tesla";
import { BrowserRouter as Router } from "react-router-dom";


import 'bulma/css/bulma.css';
import './styles.scss';

const rootReducer = combineReducers({
  mustang: mustangReducer,
  tesla: teslaReducer
})
const store = createStore(rootReducer);


const rootElement = document.getElementById('root');

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
 rootElement);
