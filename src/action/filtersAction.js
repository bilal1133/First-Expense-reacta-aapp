// Set Text

export const setText=(text)=>{
    return {
        type:"TEXT",
        text
    }
}

// Sort By Date
export const  sortByDate=()=>{
    return {
        type:'SORT_BY_DATE'
    }
}

// sort by amount
export const  sortByAmount=()=>{
    return {
        type:'SORT_BY_AMOUNT'
    }
}

// set Starting Date
export const setStartDate=(date)=>{
    return{
        type:'SET_START_DATE',
        date
    }
}

// set Ending Date
export const setEndDate=(date)=>{
    return{
        type:'SET_END_DATE',
        date
    }
}