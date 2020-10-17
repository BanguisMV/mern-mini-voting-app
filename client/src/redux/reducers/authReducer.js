import { LOGIN_SUCESSS, LOGIN_FAILED, LOGIN_FETCHING } from '../actions/types';

const INITIAL_STATE = {
   isLoggedIn: false,
   loading: false,
   hasError: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_SUCESSS:
           return {
             ...state, 
             isLoggedIn: action.payload.isLoggedIn,
             token: action.payload.token,
             loading:action.payload.loading
           };
           case LOGIN_FAILED:
            return {
              ...state, 
              errorMessage:action.payload.errorMessage,
              loading:action.payload.loading,
              hasError:action.payload.hasError
            };
            case LOGIN_FETCHING:
              return {
                ...state, 
                loading:action.payload.loading
            };
        
         default: return state;
    }

};

export default reducer;