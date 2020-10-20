import { CANDIDATE_FETCHING, CANDIDATE_SUCCESS, CANDIDATE_FAILED } from '../actions/types';

const INITIAL_STATE = {
  loading:true,
  error:'',
  data: []
};

const candidateReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CANDIDATE_FETCHING:
           return {
             ...state, 
                loading: action.payload.loading
           };
        case CANDIDATE_SUCCESS:
              return {
               ...state, 
               error: action.payload.error,
               loading: action.payload.loading,
               data:action.payload.data
            };
        case CANDIDATE_FAILED:
                return {
                 ...state, 
                 loading: action.payload.loading,
                 error: action.payload.error
              };
         default: return state;
    }

};

export default candidateReducer;