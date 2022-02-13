import React from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

function Balance() {
  const history = useReadLocalStorage('history');

  const getSumOfIncome = () => {
    if (!history) return;

    const sum = history.reduce(
      (prevValue, currentObject) =>
        currentObject.amount > 0
          ? prevValue + currentObject.amount
          : prevValue + 0,
      0
    );

    return sum;
  };

  const getSumOfExpenses = () => {
    if (!history) return;

    const sum = history.reduce(
      (prevValue, currentObject) =>
        currentObject.amount < 0
          ? prevValue + currentObject.amount
          : prevValue + 0,
      0
    );

    return sum;
  };

  const getTotalBalance = () => {
    if (!history) return;

    const sum = history.reduce(
      (prevValue, currentObject) => prevValue + currentObject.amount,
      0
    );

    return sum;
  };

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      {history && (
        <>
          <h3>{getTotalBalance()}</h3>

          <div>
            <div>
              INCOME
              <br />
              {getSumOfIncome()}
            </div>
            <div>
              EXPENSE
              <br />
              {getSumOfExpenses()}
            </div>
          </div>
        </>
      )}
      {!history && <p>Add some transactions to get started</p>}
    </div>
  );
}

export default Balance;
