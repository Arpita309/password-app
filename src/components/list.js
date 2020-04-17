import React from 'react'
import List from './userList'

const UserList = ({users}) => {
    console.log(users);
   
  return (
    <div className="project-list section">
        <div className="row">
        { users && users.map(user => {
              return (
                  <div className="col-md-4">
            
          <List user={user} key={user.id}  id={user.id}/>
         
         </div>
          )
        })}
        </div>
            
            
        
       
       
       
     
    </div>
  )
}

export default UserList