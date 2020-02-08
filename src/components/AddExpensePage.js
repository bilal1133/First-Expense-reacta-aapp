import React from 'react'
import ExpenseForm from "./ExpenceForm"
import {addExpense} from "../action/expencesActions";
import {connect} from "react-redux";
const AddExpensePage =(props)=>(
    <div>
        <h1>Create</h1>
        <ExpenseForm
            onSubmit={(expense)=>{
                console.log("Submitted")
                console.log(expense)

                props.dispatch(addExpense(expense));
                props.history.push("/")

        }}/>
    </div>
)

 export default connect()(AddExpensePage);