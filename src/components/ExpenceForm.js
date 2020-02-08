import React from "react";
import moment from "moment";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import SingleDatePicker from "react-dates/esm/components/SingleDatePicker";
import {addExpense} from "../action/expencesActions";
class ExpenseForm extends React.Component{
   constructor(props) {
       super(props);
       this.state={
           description: props.expense ?  props.expense.description :'',
           note: props.expense ? props.expense.note : '',
           createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
           amount:props.expense ? props.expense.amount :'',
           focused:false,
           error:undefined
       }
   }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState({error:true});
        }else{
            this.setState({error:undefined});
            console.log(this.state)
            this.props.onSubmit(
                {description:this.state.description,
                amount:parseFloat(this.state.amount),
                note:this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error ? <h1>Please Enter Description and Amount</h1>:undefined}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        value={this.state.description}
                        placeholder='Description'
                        onChange={(e)=>{
                            e.persist();
                            this.setState(()=>({description:e.target.value}))
                        }}
                    />
                    <input
                        type={'number'}
                        placeholder={'Amount'}
                        value={this.state.amount}
                        onChange={(e)=>{
                            e.persist();
                            this.setState({amount:e.target.value})
                        }}
                    />
                    <textarea
                    value={this.state.note}
                    placeholder={'Note : to take a hint  (OPTIONAL)'}
                    onChange={(e)=>{
                        e.persist();
                        this.setState({note:e.target.value})
                    }
                    }
                    >
                     </textarea>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={date => this.setState({ createdAt:date })} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>ADD EXPENSE</button>
                </form>


            </div>
        )


    }
}
export default ExpenseForm