import React from 'react';
import './NewExpenses.css';
import ExpensesForm from './ExpensesForm';

const NewExpenses = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpenses(expenseData);
    }
    return (
        <div className='new-expenses'>
            <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpenses;