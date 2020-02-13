import { ENTRY } from '../actions/SessionActions';
import { load } from 'redux-localstorage-simple';

let ENTR = load({ namespace: 'search_youtube' });

if (!ENTR || !('entry' in ENTR) ){
    ENTR = {
        entry: false,
    }
}

export const entry = ( state=ENTR.entry, action ) =>{
    switch(action.type){
        case ENTRY:
            return !state
        default: return state
    }
}
