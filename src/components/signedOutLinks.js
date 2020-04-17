import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks=()=>{
    return(

        <div>
        <ul className="right" style={{float:'right'}} >
          <li><NavLink to='/signup'className=" btn  light-green darken-1 " style={{marginLeft:'100px'}} >SignUp</NavLink></li>
          <li><NavLink to='/signin' className=" btn  pink darken-3 ">LogIn</NavLink></li>
          
        </ul>
      </div>
    )
  }
  
  export default SignedOutLinks;