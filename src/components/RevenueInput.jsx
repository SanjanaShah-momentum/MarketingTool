import React from 'react';

const RevenueInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Enter Revenue (in Rupees):</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default RevenueInput;
