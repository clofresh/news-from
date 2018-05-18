import React, { Component } from 'react';
import Homepage from "./pages/Homepage";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    		<header>
    			<h1>News-From</h1><img className="news-from-logo" src="/assets/images/news-from-logo.png" />
    		</header>
        <Homepage />
      </div>
    );
  }
}

export default App;
