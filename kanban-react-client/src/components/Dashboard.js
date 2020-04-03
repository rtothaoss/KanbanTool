import React, { Component } from 'react';
import ProjectItem from './project/ProjectItem';
import CreateProjectButton from './project/CreateProjectButton';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import PropTypes from 'prop-types';


class Dashboard extends Component {

    componentDidMount(){
        this.props.getProjects();
    }

    render() {

        let projectItems;

        if(this.props.project) {
            projectItems = this.props.project.map(item => (
                <ProjectItem 
                    key={item.projectIdentifier}
                    projectIdentifier={item.projectIdentifier}
                    projectName={item.projectName}
                    description={item.description}
                    
                />
            ))
        }


        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Projects</h1>
                            <br />
                               <CreateProjectButton />
                            <br />
                            <hr />
                            {projectItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        project: state.project.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProjects: () => dispatch(actions.getProjects())
    }
}

Dashboard.propTypes = {
    projects: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);