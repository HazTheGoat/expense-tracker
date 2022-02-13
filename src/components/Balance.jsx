import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useReadLocalStorage, useLocalStorage } from 'usehooks-ts';

function Balance() {
  const history = useReadLocalStorage('history');

  const getSumOfIncome = () => {
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
    const sum = history.reduce(
      (prevValue, currentObject) =>
        currentObject.amount < 0
          ? prevValue + currentObject.amount
          : prevValue + 0,
      0
    );

    return sum;
  };

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>[$260.00]</h3>

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
    </div>
  );
}

export default Balance;
