import React from 'react';

const ButtonGroup = ({ onSelect }) => {
  return (
    <div>
      <button onClick={() => onSelect('pre')}>Pre-Product</button>
      <button onClick={() => onSelect('post')}>Post-Product</button>
      <button onClick={() => onSelect('high')}>High Growth</button>
      <button onClick={() => onSelect('mature')}>Mature</button>
    </div>
  );
};

export default ButtonGroup;
