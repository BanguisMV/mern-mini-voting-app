import { LOGIN_FAILED, LOGIN_SUCESSS,LOGIN_FETCHING } from './types';



export const FETCHING = () => {
    return {
        type: LOGIN_FETCHING,
        payload: {
            isLoggedIn: false,
            loading:true,
        }
    }
}

export const SUCCESS = (token) => {
    return {
        type: LOGIN_SUCESSS,
        payload: {
            isLoggedIn: true,
            loading:false,
            token,
       }
    }
}

export const FAILED = (error) => {
    return {
        type: LOGIN_FAILED,
        payload: {
            isLoggedIn: false,
            loading: false,
            hasError: true,
            errorMessage:error
        }
    }
}


export const LoginMiddleware =(values) => {
    return dispatch => {
        const body = {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(values),
        }
        dispatch(FETCHING())
        fetch('/login', body)
        .then(res => res.json())
        .then(data => {

          if(data.status !== 200) {
            dispatch(FAILED(data.message))
          } else {
            localStorage.setItem('token', data.token);
            dispatch(SUCCESS(data.token))
          }
        }).catch(err => dispatch(FAILED(err)))

    }
}




