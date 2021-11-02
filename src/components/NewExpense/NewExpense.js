import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [buttonClick, setButtonClick] = useState(false);

  const renderForm = () => {
    setButtonClick(true);
    console.log(buttonClick);
  }

  const expenseButton = <button onClick={renderForm}>Add New Expense</button>

  if (buttonClick === true) {
    return <div classname="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
  }

  return (
    <div className="new-expense">
      {expenseButton}
    </div>
  );
};

export default NewExpense;
