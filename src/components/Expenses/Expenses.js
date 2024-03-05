import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [enteredFilteredYear, setEnteredFilterYear] = useState("2024");
  const onYearSaveHandler = (year) => {
    setEnteredFilterYear(year);
    console.log(enteredFilteredYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilteredYear}
          onYearSave={onYearSaveHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
