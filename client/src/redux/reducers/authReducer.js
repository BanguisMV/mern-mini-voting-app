import { LOGIN } from '../actions/actions';

const INITIAL_STATE = {
   isLoggedIn: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
           return {
             ...state, isAuth: true,
           };
         default: return state;
    }

};

export default reducer;