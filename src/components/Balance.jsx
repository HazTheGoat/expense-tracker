import React, { useState, useEffect } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

function Balance() {
  const history = useReadLocalStorage('history');

  const [income, setIncome] = useState(500);
  const [expense, setExpense] = useState(0);

  //? Hvordan sjekke income?
  //* Vi må sette en state på hva som blir satt inn, negative = expense, positive = income

  useEffect(() => {
    // Kjør denne koden, hver gang history oppdateres
    console.log('HISTORY: ', history);
    if (!history) return;

    if (history.length === 1) {
      setIncome(history[0].amount);
    } else {
      setIncome(
        history.reduce(
          (prevValue, currentValue) => prevValue.amount + currentValue.amount
        )
      );
    }
  }, [history]);

  useEffect(() => {
    // Kjør denne koden, hver gang history oppdateres
    console.log('HISTORY: ', history);
    if (!history) return;

    if (history.length === 1) {
      setExpense(history[0].amount);
    } else {
      setExpense(
        history.reduce(
          (prevValue, currentValue) => prevValue.amount + currentValue.amount
        )
      );
    }
  }, [history]);

  //TODO Find out why reduce doesn't work
  //TODO Setup the balance UI/CSS
  //TODO Setup a grid for the balance

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>[$260.00]</h3>

      <div>
        <div>
          INCOME
          <br />
          {income}
        </div>
        <div>
          EXPENSE
          <br />
          {expense}
        </div>
      </div>
    </div>
  );
}

export default Balance;
