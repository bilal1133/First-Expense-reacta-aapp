import  moment from 'moment'
const filterDefaultState={
    text:'',
    sortBy:'date',
    startingDate:moment().startOf('month'),
    endingDate:moment().endOf('month')
}

const filterReducer=(state=filterDefaultState,action)=>{
    switch(action.type){
        case('TEXT'):
            return {
                ...state,text:action.text
            }
        case('SORT_BY_DATE'):
            return{
                ...state,
                sortBy: 'date'
            }
        case('SORT_BY_AMOUNT'):
            return{
                ...state,
                sortBy: 'amount'
            }
        case('SET_START_DATE'):
            return{
                ...state,
                startingDate: action.date
            }
        case('SET_END_DATE'):
            return{
                ...state,
                endingDate: action.date
            }
        default:
            return state;
    }
}
export default filterReducer;