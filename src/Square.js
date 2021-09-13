import React from 'react';

// onClick neesita saber del estado del Grid, por eso se va pasar como un prop

const Square = ({ value, onClick }) => {
  return (
    <button
      className='col btn btn-outline-dark fs-1'
      type='button'
      onClick={onClick}
      style={{ height: '7rem' }}
    >
      {value}
    </button>
  );
};

export default Square;
