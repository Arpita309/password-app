export const createUser = (user) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('passwords').add({
        user
      }).then(() => {
        dispatch({ type: 'CREATE_User_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_User_ERROR' }, err);
      });
    }
  };
 
  export const deleteUser = (id) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('passwords').doc(id).delete()
      .then(() => {
        dispatch({ type: 'DELETE_User_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'DELETE_User_ERROR' }, err);
      });
    }
  };
  export const updateUser = (id,user) => {
    return (dispatch, getState, {getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('passwords').doc(id).update({
       user
      })
      .then(() => {
        dispatch({ type: 'UPDATE_User_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'UPDATE_User_ERROR' }, err);
      });
    }
  };
 