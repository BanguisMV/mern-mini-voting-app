import { LOGIN, LOGOUT, TOKEN_EXPIRED, TOKEN_NOT_EXPIRED } from '../actions/types';

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
         case TOKEN_EXPIRED:
            return {
              ...state, 
              isLoggedIn: action.payload.isLoggedIn,
            };
        case TOKEN_NOT_EXPIRED:
               return {
                 ...state, 
                 isLoggedIn: action.payload.isLoggedIn,
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