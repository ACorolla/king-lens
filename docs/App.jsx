import React from 'react';
import { browserHistory as history, Router } from 'react-router';
import routes from './routes';
import './scss/main.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router history={history} routes={routes} />
      </div>
    );
  }
}

export default App;
