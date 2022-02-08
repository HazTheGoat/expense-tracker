import React from 'react';
import TransactionForm from './TransactionForm';

function ExpenseTracker() {
  const movies = localStorage.getItem('rekal-2022');

  console.log('MOVIES FROM LOCALSTORAGE: ', JSON.parse(movies));
  return (
    <div>
      <h1>Expense Tracker</h1>
      <TransactionForm />
    </div>
  );
}

export default ExpenseTracker;
