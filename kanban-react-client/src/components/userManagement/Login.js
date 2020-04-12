import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import * as actions from '../../store/actions'

class Login extends Component {

  state = {
    username: '',
    password: '',
    errors: {}
  }

  componentDidMount() {
    if(this.props.security.validToken) {
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.security.validToken) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
    const LoginRequest = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(LoginRequest)
  }



  render() {

    const { errors } = this.state;


    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <form action="dashboard.html" onSubmit={this.onSubmitHandler}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.username
                    })}
                    placeholder="Email Address"
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
    security: state.security,
    errors: state.errors.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (LoginRequest) => dispatch(actions.login(LoginRequest))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);