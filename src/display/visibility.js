// import store from '../store/firstStore'
import moment from 'moment'
export default (expenses, {text, startingDate, endingDate, sortBy}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);

        const startDateMatch = startingDate ? startingDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endingDate ? endingDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        console.log(`createdAtMoment = ${createdAtMoment} startDateMatch=${startDateMatch} endDateMatch= ${endDateMatch}`)
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};