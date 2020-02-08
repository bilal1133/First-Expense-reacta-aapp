import React from "react";
import SingleExpensePage from "./SingleExpensePage";
import {connect} from "react-redux";
import selectExpenses from "../display/visibility";

const ExpenseList= (props)=>
    (
        <div>
            {props.expenses.map((expense)=>
                (
                    <SingleExpensePage key={expense.id} {...expense}/>)
            )
            }
        </div>
    )
const mapStoreToState=(state)=>{
    return{
        expenses:selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStoreToState)(ExpenseList)