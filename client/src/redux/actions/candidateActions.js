import { CANDIDATE_FETCHING, CANDIDATE_SUCCESS ,CANDIDATE_FAILED } from './types';

const FETCHING = () => {
    return {
        type:CANDIDATE_FETCHING,
        payload: {
            loading:true
        }
    }
}

const SUCCESS = (data) => {
    return {
        type: CANDIDATE_SUCCESS,
        payload: {
            loading:false,
            data:data,
        }
    }
}

const FAILED = (error) => {
    return {
        type: CANDIDATE_FAILED,
        payload: {
            loading:false,
            error,
        }
    }
}

const headers = {
    headers: {
          Authorization: localStorage.getItem('token')
      }
  }
export const getCandidates = () => {
    return dispatch => {
        dispatch(FETCHING())
        fetch('/candidates', headers)
            .then(res => res.json())
            .then(res => dispatch(SUCCESS(res)))
            .catch(err => dispatch(FAILED(err)))
    }
}