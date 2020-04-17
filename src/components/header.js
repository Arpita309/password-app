import React from 'react';
import '../App.css';
import { NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label,NavLink } from 'reactstrap';
    import{auth,database, firestore}from '../firebase/fb';
    import { Link } from 'react-router-dom'
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks'
import { connect } from 'react-redux'
import 'reactstrap'

const Navbar =(props)=>{
  const { auth,profile } = props;
  const links=auth.uid?<SignedInLinks profile={profile}/>:<SignedOutLinks/>
  console.log(links);
  return(
    
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
<Link to ='/' class="navbar-brand" href="#">Password App</Link>
<button class="navbar-toggler" style={{marginBottom:'10px'}} type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarColor01">
  <ul >
      <li  >
     {links}
     </li>
     </ul>
    
  
  
    
    
 </div>
</nav>


);
}
const mapStateToProps = (state) => {
  
  return{
    auth: state.firebase.auth,
    profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)

        


