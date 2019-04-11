import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Router from './Router'
// import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Router />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
