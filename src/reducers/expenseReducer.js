const expenceDefaultState = [];
 const expenseReducer=(state=expenceDefaultState,action)=>{
    switch(action.type){
        case('ADD'):
        return [
            ...state,
            action.expense
          ];
        case('EDIT'):
            console.log("In Edit")
           return state.map((expense)=>{
                if(expense.id === action.id){

                    return {
                        ...expense,
                        ...action.updates
                    }}else{
                        return expense
                    }

            })

        case('REMOVE'):
            return state.filter((singleExpense)=>(
                (singleExpense.id !== action.id)
            ))
        default:
            return state;
    }
 }
 export default expenseReducer;