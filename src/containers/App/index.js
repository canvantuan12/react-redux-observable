import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

import Home from './../HomePage';
import AppWrapper from "./../../components/AppWrapper";

class App extends Component {
  render() {
    return (
      <AppWrapper>  
        <Header></Header>
        <Switch>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </AppWrapper>
    );
  }
}

export default App;
