import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import  UserList from './list'
import { Redirect } from 'react-router-dom'


class Dashboard extends React.Component{
    render(){
      
        const { users, auth } = this.props;
        if (!auth.uid) return <Redirect to='/initial' />
        return(
            <div>
               <UserList users={users}/> 
            </div>
           
        );
    }
}
const mapStateToProps = (state) => {
     console.log(state);
    return {
      users: state.firestore.ordered.passwords,
      auth: state.firebase.auth
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
      if (!props.auth.uid) return []
      return [
          {collection: 'passwords',
          where: [
             ['userId', '==', props.auth.uid]
          ]
      }
      ]})
  )(Dashboard)
  