import React from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

function Balance() {
  const history = useReadLocalStorage('history');

  return (
    <div>
      <h2>Your Balance</h2>
      <h3>[$260.00]</h3>

      <div>
        <div>
          INCOME
          <br />
          [$500]
        </div>
        <div>
          EXPENSE
          <br />
          [$240]
        </div>
      </div>
    </div>
  );
}

export default Balance;
