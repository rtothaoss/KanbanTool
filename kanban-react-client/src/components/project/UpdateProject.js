import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'
import PropTypes from 'prop-types';
import classnames from 'classnames';

class UpdateProject extends Component {

    state = {
        id: "",
        projectName: "",
        projectIdentifier: "",
        description: "",
        start_date: "",
        end_date: "",
        errors: {}
    }


    componentDidMount() {
        const { id } = this.props.match.params

        this.props.getProject(id, this.props.history);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
        const {
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date,
        } = nextProps.project
        this.setState({
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date,
        })
    }

    onChangeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const updatedProject = {
            id: this.state.id,
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        }
        this.props.createProject(updatedProject, this.props.history)
    }


    render() {

        const { errors } = this.props

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Update Project Form</h5>
                            <hr />
                            <form onSubmit={this.onSubmitHandler}> 
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg ", {
                                            'is-invalid': errors.projectName
                                        })}
                                        name='projectName'
                                        value={this.state.projectName}
                                        onChange={this.onChangeHandler}
                                    />
                                    {errors.projectName && (
                                        <div className='invalid-feedback'>{errors.projectName}</div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg ", {
                                            'is-invalid': errors.projectIdentifier
                                        })}
                                        name='projectIdentifier'
                                        value={this.state.projectIdentifier}
                                        onChange={this.onChangeHandler}
                                        disabled 
                                        />
                                        {errors.projectName && (
                                        <div className='invalid-feedback'>{errors.projectIdentifier}</div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <textarea
                                        className={classnames("form-control form-control-lg ", {
                                            'is-invalid': errors.description
                                        })}
                                        name='description'
                                        value={this.state.description}
                                        onChange={this.onChangeHandler}></textarea>
                                        <div className='invalid-feedback'>{errors.description}</div>
                                    
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                        className="form-control form-control-lg"
                                        name="start_date"
                                        value={this.state.start_date}
                                        onChange={this.onChangeHandler}
                                    />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                        className="form-control form-control-lg"
                                        name="end_date"
                                        value={this.state.end_date}
                                        onChange={this.onChangeHandler}
                                    />
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        project: state.project.project,
        errors: state.errors.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProject: (id, history) => dispatch(actions.getProject(id, history)),
        createProject: (project, history) => dispatch(actions.createProject(project, history))
    }
}

UpdateProject.propTypes = {
    project: PropTypes.object.isRequired,
    createProject: PropTypes.func.isRequired,
    getProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProject);