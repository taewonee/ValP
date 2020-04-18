import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, BrowserHistory} from 'react-router';

import App from './App';
import Home from './containers/Home';
import Result from './containers/Result';
import Survey from './containers/Survey';

import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="Survey" component={Survey}/>
      <Route path="Result" component={Result}/>
    </Route>
  </Router>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
