import React from 'react';

import { useReadLocalStorage } from 'usehooks-ts';

function History() {
  const history = useReadLocalStorage('history');
  //TODO Style the history thats being shown
  return (
    <div>
      {history && (
        <>
          <h2>History</h2>
          <hr />

          {history.map((item, i) => (
            <div className="historyItems" key={i}>
              <p className="rightBar">
                {item.text}
                <span className="historyItemPrice">{item.amount}</span>
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default History;
