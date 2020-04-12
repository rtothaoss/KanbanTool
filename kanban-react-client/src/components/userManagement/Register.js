import React, { Component } from "react";
import * as actions from '../../store/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

class Register extends Component {

  state = {
    username: '',
    fullName:'',
    password:'',
    confirmPassword:'',
    errors: {}
  }

  componentDidMount() {
    if(this.props.security.validToken) {
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
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
  const newUser = {
      username: this.state.username,
      fullName: this.state.fullName,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
  }
  this.props.createNewUser(newUser, this.props.history)
}

  render() {

    const { errors } = this.state

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Account</p>
              <form action="create-profile.html" onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.fullName
                    })}
                    placeholder="Full Name"
                    name="fullName"
                    value={this.state.fullName}
                    onChange={this.onChangeHandler}
                  />
                    {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="Email Address (Username)"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeHandler}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.password
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangeHandler}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.confirmPassword
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChangeHandler}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
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
    errors: state.errors.errors,
    security: state.security
  }
}

const mapDispatchToProps = dispatch => {
  return {
      createNewUser: (newUser, history) => dispatch(actions.createNewUser(newUser, history))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Register);