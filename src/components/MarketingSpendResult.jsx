import React from 'react';

const MarketingSpendResult = ({ minSpend, maxSpend }) => {
  return (
    <div className="mt-3">
      <h4>Marketing Spend Range:</h4>
      <p>
        Minimum Spend: Rs. <input type='number' value={minSpend}></input>
        {maxSpend !== null && ` - Maximum Spend: Rs. ${maxSpend}`}
      </p>
    </div>
  );
}

export default MarketingSpendResult;
