import React, { useState } from 'react';
import Square from './Square';

const Grid = () => {
  // Los cuadros van a tener 3 estados, null, X u O.
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);

  // Pasa la logica del renderizado del Square a una funcion
  const renderSquare = (i) => {
    return <Square value={i} onClick={null} />;
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Grid;
