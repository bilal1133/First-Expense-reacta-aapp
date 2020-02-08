import React from 'react'
import ExpenseForm from "./ExpenceForm";
import {connect} from "react-redux";
import {editExpence, removeExpence} from "../action/expencesActions";

const EditExpencePage =(props)=>(
    <div>
        <h1>Edit</h1>
        <ExpenseForm
            expense={props.expense}
            onSubmit={(expense)=>{
                props.dispatch(editExpence(props.expense.id,expense))
                props.history.push('/')
            }}
        />
        <button
            onClick={(e)=>{
                console.log('Removing Item')
                props.dispatch(removeExpence(props.expense.id))
                props.history.push('/')
            }

        }>REMOVE</button>
    </div>
)
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};
export default connect(mapStateToProps)(EditExpencePage)