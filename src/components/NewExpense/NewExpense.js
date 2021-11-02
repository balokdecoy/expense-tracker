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
    setButtonClick(false);
  };

  const [buttonClick, setButtonClick] = useState(false);

  const renderForm = () => {
    setButtonClick(true);
  }

  const cancelClick = () => {
    setButtonClick(false);
  }

  return (
    <div className="new-expense">
      {!buttonClick && <button onClick={renderForm}>Add New Expense</button>}
      {buttonClick && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelClick} />}
    </div>
  );
};

export default NewExpense;
