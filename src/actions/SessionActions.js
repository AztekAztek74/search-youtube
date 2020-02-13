export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const ENTRY = 'ENTRY';
export const ACTIVE_LOGIN = 'ACTIVE_TOKEN';

export const newLogin = (id, login, token) =>{
    return{
        type: LOG_IN,
        id,
        login,
        token
    }
}

export const entryCheck = () =>{
    return{
        type: ENTRY,
    }
}

export const activeLog = (login) =>{
    return{
        type: ACTIVE_LOGIN,
        login
    }
}