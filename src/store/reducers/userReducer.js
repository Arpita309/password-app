const initState = {}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_User_SUCCESS':
          console.log('create user success');
          return state;
        case 'CREATE_User_ERROR':
          console.log('create user error');
          return state;
          case 'DELETE_USER_SUCCESS':
            console.log('delete user success');
            return state;
          case 'DELETE_USER_ERROR':
            console.log('delete user error');
             return state;
          case 'UPDATE_USER_SUCCESS':
            console.log('update user success');
            return state;
          case 'UPDATE_USER_ERROR':
            console.log('update user error');
            return state;   
        default:
          return state;
      }
};

export default userReducer;