import React from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AddProject from './components/project/AddProject';
import UpdateProject from './components/project/UpdateProject';
import ProjectBoard from './components/projectBoard/ProjectBoard';
import AddProjectTask from './components/projectBoard/projectTasks/AddProjectTask';
import UpdateProjectTask from './components/projectBoard/projectTasks/UpdateProjectTask';
import Landing from './components/layout/Landing';
import Register from './components/userManagement/Register';
import Login from './components/userManagement/Login';
import noMatch from './components/project/noMatch';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path='/' component={Landing} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />



        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/addProject' component={AddProject} />
        <Route exact path='/updateProject/:id' component={UpdateProject} />
        <Route exact path='/projectBoard/:id' component={ProjectBoard} />
        <Route exact path='/addProjectTask/:id' component={AddProjectTask} />
        <Route exact path='/updateProjectTask/:backlog_id/:pt_id' component={UpdateProjectTask} />
      </div>
    </Router>
  );
}

export default App;
