import React, { useEffect } from 'react';

import { useReadLocalStorage } from 'usehooks-ts';

function History() {
  const history = useReadLocalStorage('history');

  return (
    <div>
      <h1>History</h1>
      {history &&
        history.map((item, i) => (
          <div key={i}>
            <p>{item.text}</p>
            <p>{item.amount}</p>
          </div>
        ))}
      <hr />
    </div>
  );
}

export default History;
