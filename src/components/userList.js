import React from 'react'
import { deleteUser, updateUser } from '../store/actions/userActions'
import { connect, ReactReduxContext } from 'react-redux'
import {Link} from 'react-router-dom';
import Update from './deleteUser'


class List extends React.Component {
  constructor() {
    super();
    this.state = {
      showBar: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   this.setState({ showBar: true });
  }
    
  
    render(){

      const {user,id,dispatchDeleteUser}=this.props;
      if (this.state.showBar) {
        return <Update id={id} />;
      }
      return ( 

        <div className='container mt-10'>
            
 <div className="card   mb-3 mb-3" style={{maxWidth: "20rem",marginTop:'20px',backgroundColor:'#ffcdd2',borderRadius:'8px',borderColor:"#c51162"}}>
   <div className="card-header"><h4>{user.name}</h4></div>

 <div className="card-content">
 <div className="card-body">
 
    <h5>username 1</h5><p> {user.un1}</p>
    <h5>password 1</h5><p> {user.pass1}</p>
   
    
 </div>
   <span className="card-title activator grey-text text-darken-4"><i class="material-icons right">more_vert</i></span>
   
 </div>
 <div className="card-reveal" style={{backgroundColor:'#ffcdd2',color:'black'}}>
   <span className="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
   <h5>username 2</h5><p> {user.un2}</p>
    <h5>password 2</h5><p> {user.pass2}</p>
    <h5>username 3</h5><p> {user.un3}</p>
    <h5>password 3</h5><p> {user.pass3}</p>
    <button className="btn btn-sm " onClick={(e) => dispatchDeleteUser(e, id)} style={{float:"Left",backgroundColor:'#ff1744 '}}>Delete</button>
    <button className=" btn  blue darken-1" onClick={this.handleClick} style={{float:'right'}} >Update</button>
  

 </div>
</div>
</div>
    );
    }
    

    

}
const mapDispatchToProps = dispatch => {
  return {
    dispatchDeleteUser: (e, id) => {
      e.preventDefault()
      console.log(id);
      dispatch(deleteUser(id))
    
  }
}
}
export default 
  connect(null, mapDispatchToProps)
  
(List)





 