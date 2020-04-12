import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Backlog from './Backlog'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../../store/actions'


class ProjectBoard extends Component {

    state = {
        errors: {}
    }


    componentDidMount() {
        const { id } = this.props.match.params
        this.props.getBacklog(id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }


    render() {

        const { id } = this.props.match.params

        const { backlog } = this.props

        const { errors } = this.state

        let BoardContent;

        const boardAlgorithm = (errors, project_tasks) => {
          if (project_tasks.length < 1) {
            
            if (errors.projectNotFound) {
              return (
                <div className="alert alert-danger text-center" role="alert">
                  {errors.projectNotFound}
                </div>
              );
            } else if (errors.projectIdentifier) {
              return (
                <div className="alert alert-danger text-center" role="alert">
                  {errors.projectIdentifier}
                </div>
              );
            } else {
              return (
                <div className="alert alert-info text-center" role="alert">
                  No Project Tasks on this board
                </div>
              );
            }
          } else {
            return <Backlog project_tasks_prop={project_tasks} />;
          }
        };
    
        BoardContent = boardAlgorithm(errors, backlog);




        return (
            <div className="container">
                <Link to={`/addProjectTask/${id}`} className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br />
                <hr />

                {/* <Backlog project_tasks_prop={backlog}/> */}
                {BoardContent}


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        backlog: state.backlog.project_tasks,
        errors: state.errors.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getBacklog: (id) => dispatch(actions.getBacklog(id))
    }
}

ProjectBoard.propTypes = {
    backlog: PropTypes.array.isRequired,
    getBacklog: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };


export default connect(mapStateToProps, mapDispatchToProps)(ProjectBoard);