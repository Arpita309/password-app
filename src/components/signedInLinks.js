import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../store/actions/authActions'

const SignedInLinks=(props)=>{
    return(

        <div>
        <ul className="right" style={{float:'right'}} >
          <li><NavLink to='/newuser'className=" btn  blue darken-1 m-0"  >New User</NavLink></li>
          <li><a onClick={props.signOut} className=" btn  red accent-3">Log Out</a></li>
    <li><NavLink to='/' className="btn btn-floating purple accent-2" >{props.profile.initials}</NavLink></li>
        </ul>
      </div>
    )
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }
  
  export default connect(null, mapDispatchToProps)(SignedInLinks)
 // 