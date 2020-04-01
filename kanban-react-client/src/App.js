import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AddProject from './components/project/AddProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/addProject' component={AddProject} />
      </div>
    </Router>
  );
}

export default App;
