import React from 'react';
import AppRouter from './routes/router';
import firstStore from './store/firstStore'
import {addExpense, editExpence, removeExpence} from './action/expencesActions'
import uuid from 'uuid'
import moment from 'moment'
import { Provider } from 'react-redux';
import {setText, sortByAmount, sortByDate, setStartDate, setEndDate} from "./action/filtersAction";
import visibility from "./display/visibility";
const store=firstStore();

function App() {
  return(
   <Provider store={store}>
        <AppRouter />
   </Provider>
    )
}



// const first=store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
// store.dispatch(removeExpence(first.expense.id));
// store.dispatch(editExpence(first.expense.id,{description: "hi this is updated",createdAt:1580877878000}))
// store.dispatch(setText('HI there'))
// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
//  store.dispatch(setStartDate(0))
//  store.dispatch(setEndDate(0))
const state=store.getState()
const finalStore = visibility(state.expenses,state.filters)

console.log(finalStore)
export default App;
