import React, { useState } from 'react';
import './ExpensesForm.css';

const ExpensesForm = () => {
    //UseState Section For all the value of the Change Handler //
    const [title, setTitle] = useState(' ');
    const [amount, setamount] = useState(' ');
    const [date, setDate] = useState(' ');
    //===============>>> ** <<<=========== */


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }


    const amountChangeHandler = (event) => {
        setamount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submeetHandler = () => {

    }
    return (
        <div>
            <form onSubmit={submeetHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label htmlFor="">Title</label>
                        <input type="text" onChange={titleChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor="">Amount</label>
                        <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                    </div>
                    <div className='new-expense__control'>
                        <label htmlFor="">Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
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