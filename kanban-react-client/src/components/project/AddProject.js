import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'

class AddProject extends Component {

    state = {
        projectName: "",
        projectIdentifier: "",
        description: "",
        start_date: "",
        end_date: "",
        errors:{}
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChangeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        const newProject = {
            projectName: this.state.projectName,
            projectIdentifier: this.state.projectIdentifier,
            description: this.state.description,
            start_date: this.state.start_date,
            end_date: this.state.end_date
        }
        this.props.createProject(newProject, this.props.history)
    }


    render() {

        const {errors} = this.state


        return (
            <div className="register">
               
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Project form</h5>
                            <hr />
                            <form onSubmit={this.onSubmitHandler}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg "
                                        placeholder="Project Name"
                                        name="projectName"
                                        value={this.state.projectName}
                                        onChange={this.onChangeHandler}
                                    />
                                </div>
                                <p style={{color: 'red', margin: '0 auto'}}>{errors.projectName}</p>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Unique Project ID"
                                        name="projectIdentifier"
                                        value={this.state.projectIdentifier}
                                        onChange={this.onChangeHandler}
                                    />
                                </div>
                                <p style={{color: 'red', margin: '0 auto'}}>{errors.projectIdentifier}</p>

                                <div className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        placeholder="Project Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChangeHandler}
                                    />
                                </div>
                                <p style={{color: 'red', margin: '0 auto'}}>{errors.description}</p>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                {/* <p style={{color: 'red'}}>{errors.start_date}</p> */}
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="start_date"
                                        value={this.state.start_date}
                                        onChange={this.onChangeHandler}
                                    />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                {/* <p style={{color: 'red'}}>{errors.end_date}</p> */}
                                    <input
                                        type="date"
                                        className="form-control form-control-lg"
                                        name="end_date"
                                        value={this.state.end_date}
                                        onChange={this.onChangeHandler}
                                    />
                                </div>

                                <input 
                                    type="submit" 
                                    className="btn btn-primary btn-block mt-4" 
                                />
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
        errors: state.errors.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project, history) => dispatch(actions.createProject(project, history))
    }
}

AddProject.propTypes = {
    createProject: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);