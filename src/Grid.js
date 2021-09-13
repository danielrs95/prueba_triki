import React, { useState } from 'react';
import Square from './Square';

const Grid = () => {
  // Los cuadros van a tener 3 estados, null, X u O.
  const [squares, setSquares] = useState(Array(9).fill(null));
  console.log(squares);

  // Definimos el turno
  const [turn, setTurn] = useState(true);

  // calculate winner
  const playerWinner = winner(squares);

  // calculate draw
  const gameDraw = draw(squares);

  // Pasa la logica del renderizado del Square a una funcion
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          // Evitamos que se pueda hacer click en un cuadro que ya está usado y que se pueda dar click si ya hay un ganador en caso que se halla ganado muy rapido
          if (squares[i] != null || playerWinner != null) {
            return;
          }

          // Copia de squares, para poder cambiar el estado
          const copySquares = squares.slice();

          // El turno inicial siempre será X
          copySquares[i] = turn ? 'X' : '0';
          setSquares(copySquares);

          setTurn(!turn);
        }}
      />
    );
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
      <div>Player turn: {turn ? 'X' : '0'}</div>
      <div>
        {playerWinner ? (
          `The winner is: ${playerWinner}`
        ) : gameDraw ? (
          `The game is a draw!`
        ) : (
          <>No winner yet!</>
        )}
      </div>
      <a href='/'>restart the game!</a>
    </div>
  );
};

const winner = (squares) => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombos.length; i++) {
    // Iteramos por las posibles combinaciones, cuando i=0 => [a,b,c] = [0,1,2]
    const [a, b, c] = winningCombos[i];

    // Si el turno en cada uno de los squares es iguales en la combinacion ganadora definida anteriormente
    // Es decir, si evaluamos nuestro puntaje (square) en las posicion ganadora i=0 y los 3 valores son iguales a X u O, es ganador
    // En otras palabras, si en la combinacion ganadora, los 3 valores son iguales hay un ganador
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const draw = (squares) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] == null) {
      // Iteremos por todos los elementos, si encuentra algun null devuelve false
      return false;
    }
  }
  // Si itera por todos los elementos y no encuentra null, devuelve true indicando que hay empate
  return true;
};

export default Grid;
