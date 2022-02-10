import React, { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

function TransactionForm() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [history, setHistory] = useLocalStorage('history', []);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddTransaction = () => {
    // validate text and amount (both are required)
    if (!text && !amount) return;
    setHistory([
      ...history,
      {
        text,
        amount,
      },
    ]);
    setText('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add new transaction</h2>
      <hr />

      <div>
        <label>Text</label>
        <br />
        <input
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text..."
        />
      </div>
      <br />

      <div>
        <label>Amount</label>
        <br />
        <div>(Negative - expense, positive - income)</div>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter amount..."
        />
      </div>

      <button type="button" onClick={handleAddTransaction}>
        Add transaction
      </button>
    </div>
  );
}

export default TransactionForm;
