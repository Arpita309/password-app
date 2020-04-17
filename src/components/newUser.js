import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/userActions'
import { Redirect } from 'react-router-dom'
class NewUser extends Component {
  state = {
    name: '',
    un1:'',
    un2:'',
    un3:'',
    pass1: '',
    pass2: '',
    pass3: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/initial' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">New User</h5>
          <div className="input-field" style={{paddingLeft:"10px"}}>
            <label htmlFor="name" style={{paddingLeft:"10px"}}>Name</label>
            <input type="text" id='name' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{paddingLeft:"10px"}}>
          <label htmlFor="un1" style={{paddingLeft:"10px"}}>Usern1</label>
            <input type="text" id='un1' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{paddingLeft:"10px"}}>
            <label htmlFor="password1"style={{paddingLeft:"10px"}}>Password 1 </label>
            <input type="text" id='pass1' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{paddingLeft:"10px"}}>
          <label htmlFor="un2" style={{paddingLeft:"10px"}}>Usern2</label>
            <input type="text" id='un2' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{paddingLeft:"10px"}}>
            <label htmlFor="password2" style={{paddingLeft:"10px"}}>Password 1</label>
            <input type="text" id='pass2' onChange={this.handleChange} />
          </div>
          <div className="input-field"style={{paddingLeft:"10px"}}>
          <label htmlFor="un3" style={{paddingLeft:"10px"}}>Usern3</label>
          <input type="text" id='un3' onChange={this.handleChange} />
        </div>
          <div className="input-field" style={{paddingLeft:"10px"}}>
            <label htmlFor="password3" style={{paddingLeft:"10px"}}>Password 3</label>
            <input type="text" id='pass3' onChange={this.handleChange} />
          </div>
          <div className="input-field" style={{paddingBottom:"10px"}}>
            <button className="btn pink lighten-1 z-depth-0" style={{paddingBottom:"10px"}}>Add User</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
    return {
      createProject: (user) => dispatch(createUser(user)),
      
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NewUser)

