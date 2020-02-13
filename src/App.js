import React, { Component } from 'react';
import Header from './components/header/header'
import Main from './main'
import Footer from './components/footer/footer'
import 'jquery';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <body>
          <Main />
          <Footer/>
          </body>
      </div>
    );
  }
}

export default App;