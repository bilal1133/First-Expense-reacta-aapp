import React from "react";
import {connect} from "react-redux";
import {setEndDate, setStartDate, setText, sortByAmount, sortByDate} from "../action/filtersAction";
import DateRangePicker from "react-dates/esm/components/DateRangePicker";
import SingleDatePicker from "react-dates/esm/components/SingleDatePicker";

class FilterComponents extends React.Component{
    constructor() {
        super();
        this.state={
            focusedInput:null
        }
    }
    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder={'Text'}
                    value={this.props.filters.text}
                    onChange={(e)=>{
                        this.props.dispatch(setText(e.target.value))
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e)=>{
                        if(e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount())
                        }else if(e.target.value === 'date'){
                            this.props.dispatch(sortByDate())
                        }
                    }}
                >
                        <option value="amount">Amount</option>
                        <option value="date">Date</option>
                </select>

                {/* eslint-disable-next-line react/jsx-no-undef */}
                <DateRangePicker
                    startDate={this.props.filters.startingDate} // momentPropTypes.momentObj or null,
                    endDate={this.props.filters.endingDate} // momentPropTypes.momentObj or null,
                    onDatesChange={({ startDate, endDate }) => {
                        this.props.dispatch(setStartDate(startDate))
                        this.props.dispatch(setEndDate(endDate))
                    }} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    isOutsideRange={() => false}
                    showClearDates={true}
                />

            </div>

        )
    }
}
const mapStoreToState=(state)=>{
    return{
        filters:state.filters
    }
}

export default connect(mapStoreToState)(FilterComponents);