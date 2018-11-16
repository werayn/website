import React, { Component } from 'react';
import Footer from './containers/Footer';
import Header from './containers/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
      );
  }
}

export { App };
