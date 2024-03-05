import React from 'react'
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
  const onSaveExpenseFormHandler = (enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpenses(expenseData);
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseForm= {onSaveExpenseFormHandler}></ExpenseForm>
    </div>
  )
}

export default NewExpense
