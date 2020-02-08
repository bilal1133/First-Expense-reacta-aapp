import uuid from 'uuid'
 export const addExpense = ({description='',note='',amount=0,createdAt=0}={})=>(
    {
   type:'ADD',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt,
    }
})
export  const editExpence=(id,updates)=>{
   return{type:'EDIT',
       id,
       updates
   }
}
export const removeExpence =(id)=>{
    // eslint-disable-next-line no-unused-expressions
   return { type:"REMOVE",id}
}