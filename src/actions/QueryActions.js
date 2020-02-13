export const ACTIVE_QUERY = 'ACTIVE_QUERY'
export const ACTIVE_SEARCH = 'ACTIVE_SEARCH'
export const ACTIVE_RESULT = 'ACTIVE_RESULT'
export const ACTIVE_SORT = 'ACTIVE_SORT'
export const DISABLED_SEARCH = 'DISABLED_SEARCH'
export const CURRENT_TAB = 'CURRENT_TAB'


export const activeQuery = (value) =>{
    return{
        type: ACTIVE_QUERY,
        value,
    }
}

export const activeSearch = () =>{
    return{
        type: ACTIVE_SEARCH
    }
}

export const disabledSearch = () =>{
    return{
        type: DISABLED_SEARCH
    }
}

export const activeResult = (numResult) =>{
    return{
        type: ACTIVE_RESULT,
        numResult,
    }
}

export const activeSort = (sort) =>{
    return{
        type: ACTIVE_SORT,
        sort,
    }
}

export const currentTab = (tab) =>{
    return{
        type: CURRENT_TAB,
        tab,
    }
}