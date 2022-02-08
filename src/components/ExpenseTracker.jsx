import React from 'react';
import TransactionForm from './TransactionForm';
import History from './History';
import Balance from './Balance';

function ExpenseTracker() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Balance />
      <History />
      <TransactionForm />
    </div>
  );
}

export default ExpenseTracker;
