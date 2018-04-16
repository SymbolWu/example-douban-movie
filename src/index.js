import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
// import {useStrict} from 'mobx';
import {Provider} from 'mobx-react'
import * as stores from './stores/rootStore'
import App from './components/App';

// useStrict(true)
ReactDOM.render((
  <Provider store={stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>

), document.getElementById('root'));
