import { ACTIVE_LOGIN } from '../actions/SessionActions';
import { load } from 'redux-localstorage-simple';

let ACTIVE = load({ namespace: 'search_youtube' })

if ( !ACTIVE || !('activeLogin' in ACTIVE) ){
    ACTIVE = {
        activeLogin: ''
    }
}

export const activeLogin = (state = ACTIVE.activeLogin, action) =>{
    switch(action.type){
        case ACTIVE_LOGIN: 
            return action.login
        default: return state
    }
}