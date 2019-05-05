import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Home from './Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from './About';


class App extends Component {

  constructor(props) {
    super(props);

  }



  renderRouter() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />

      </Switch>
    )
  }


  render() {
    return (
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>


    );

  }
}

export default App;
