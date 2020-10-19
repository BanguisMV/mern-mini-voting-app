import { LOGIN, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
   isLoggedIn: false,
   role:'',
   id:'',
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
           return {
             ...state, 
             isLoggedIn: true,
             role:action.payload.role,
             id:action.payload.id
           };
        case LOGOUT:
              return {
               ...state, 
              isLoggedIn: false,
              role:'',
              id:''
            };
         default: return state;
    }

};

export default authReducer;