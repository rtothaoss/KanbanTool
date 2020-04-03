import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import noMatch from './components/project/noMatch';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/addProject' component={AddProject} />
        <Route exact path='/updateProject/:id' component={UpdateProject} />
      </div>
    </Router>
  );
}

export default App;
