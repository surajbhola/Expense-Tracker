import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [enteredYear, setEnteredYear] = useState('2024');
  const yearChangeHandler = (event)=>{
    setEnteredYear(event.target.value); 
  }
  props.onYearSave(enteredYear);
  console.log(",era")
  console.log(props.selected);
  console.log(",era")
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;