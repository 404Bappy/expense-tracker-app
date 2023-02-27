import React from 'react';
import './ExpensesForm.css';

const ExpensesForm = () => {
    return (
        <div>
            <form action="">
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label htmlFor="">Title</label>
                        <input type="text" />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor="">Amount</label>
                        <input type="number" min="0.01" step="0.01" />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor="">Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31"  />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expenses</button>
                </div>
            </form>
        </div>
    );
};

export default ExpensesForm;