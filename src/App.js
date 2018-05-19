// React
import React, { Component } from 'react';

// Components
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>News-From</h1>
            <img
              className="news-from-logo"
              src="/assets/images/news-from-logo.png"
              alt="News-From-logo"
            />
          </header>
          <Route exact path="/" component={Homepage} />
        </div>
      </Router>
    );
  }
}

export default App;
