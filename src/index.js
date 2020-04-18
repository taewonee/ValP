import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Home from './containers/Home';
import Result from './containers/Result';
import Survey from './containers/Survey';

import './index.css';
import * as serviceWorker from './serviceWorker';

export {default as Home} from './containers/Home';
export {default as Survey} from './containers/Survey';
export {default as Result} from './containers/Result';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
