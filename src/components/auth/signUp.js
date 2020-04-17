import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth,authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field" style={{paddingLeft:"10px"}}>
            <label htmlFor="email" style={{paddingLeft:"10px"}} >Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{paddingLeft:"10px"}}>
            <label htmlFor="password" style={{paddingLeft:"10px"}}>Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{paddingLeft:"10px"}}>
            <label htmlFor="firstName" style={{paddingLeft:"10px"}}>First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{paddingLeft:"10px"}}>
            <label htmlFor="lastName" style={{paddingLeft:"10px"}}>Last Name</label>
            <input type="text" id='lastName' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{paddingBottom:"10px"}}>
            <button className="btn pink lighten-1 z-depth-0" style={{paddingBottom:"10px"}}>Sign Up</button>
          </div>
          <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)