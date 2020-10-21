import { TOKEN_EXPIRED, TOKEN_NOT_EXPIRED } from './types';
import Decode from 'jwt-decode'

const isExpired = () => {
    return {
        type: TOKEN_EXPIRED,
        payload: {
            isLoggedIn: false
        }
    }
}


const isNotExpired = () => {
    return {
        type: TOKEN_NOT_EXPIRED,
        payload: {
            isLoggedIn: true
        }
    }
}

export const validateToken = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if(!token) {  
            dispatch(isExpired()) 
        } else {
            const tokenExpired = Decode(token)
            dispatch(isNotExpired())
            const dateNow = new Date();
            if( tokenExpired.exp < dateNow.getTime()/1000){
                console.log('Expired');
                    dispatch(isExpired())
            }
         }
        }
     
}