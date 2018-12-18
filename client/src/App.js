import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Home from './components/Home';
import Header from './components/Header';
import SurveyNew from './components/SurveyNew';
import Dashboard from './components/Dashboard';

import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveyNew} />
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  actions
)(App);
