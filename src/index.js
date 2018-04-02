import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'
import App from './components/App';


ReactDOM.render((
  <HashRouter>
    {/* <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/Book" component={Book}></Route>
      <Route path="/City" component={City}></Route>
      <Route path="/Movie" component={Movie}>
        <Route path='/Moive/:moiveid' component={MoiveDetail}></Route>
      </Route>
      <Route path="/Music" component={Music}></Route>
    </Route> */}
    <App />

  </HashRouter>
), document.getElementById('root'));
