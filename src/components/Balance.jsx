import React from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

function Balance() {
  const history = useReadLocalStorage('history');
  const income = 500;

  // Create our number formatter.
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  formatter.format(income); /* $500.00 */

  //? Tried forEach first, but the result was wrong, tried .reduce next and the result was also wrong
  //   let expense = 0;
  //   history.forEach((item) => {
  //     expense += item.amount;
  //   });

  //TODO Find out why reduce doesn't work
  // const expense = history.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue.amount
  // );
  // console.log(expense);
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
          [$240]
        </div>
      </div>
    </div>
  );
}

export default Balance;
