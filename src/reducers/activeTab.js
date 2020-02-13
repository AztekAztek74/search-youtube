import { CURRENT_TAB } from '../actions/QueryActions'

import { load } from 'redux-localstorage-simple';

let TAB = load({ namespace: 'search_youtube' })

if ( !TAB || !('activeTab' in TAB) ){
    TAB = {
        activeTab: 'search'
    }
}


export const activeTab = (state = TAB.activeTab, action) =>{
    switch (action.type){
        case CURRENT_TAB:
            if(action.tab==='out'){
                action.tab = 'search'
            }
            return action.tab
        default: return state
    }
}