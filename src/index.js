import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
// import {useStrict} from 'mobx';
import {Provider} from 'mobx-react'
import * as stores from './Stores/RootStore'
import App from './Components/App';

// useStrict(true)
ReactDOM.render((
  <Provider store={stores}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>

), document.getElementById('root'));
