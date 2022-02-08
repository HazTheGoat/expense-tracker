import React from 'react';

function TransactionForm() {
  return (
    <div>
      <h2>Add new transaction</h2>
      <hr />
      <form>
        <div>
          <label for="text">Text</label>
          <br />
          <input name="text" />
        </div>
        <br />

        <div>
          <label for="amount">Amount</label>
          <br />
          <div>(Negative - expense, positive - income)</div>
          <input name="amount" />
        </div>
        <br />

        <button type="submit">Add transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
