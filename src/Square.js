import React from 'react';

// onClick neesita saber del estado del Grid, por eso se va pasar como un prop

const Square = ({ value, onClick }) => {
  return (
    <button className='col' onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
