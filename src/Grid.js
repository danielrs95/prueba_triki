import React from 'react';
import Square from './Square';

const Grid = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Square value={0} onClick={null} />
        <Square value={1} onClick={null} />
        <Square value={2} onClick={null} />
      </div>
      <div className='row'>
        <Square value={3} onClick={null} />
        <Square value={4} onClick={null} />
        <Square value={5} onClick={null} />
      </div>
      <div className='row'>
        <Square value={6} onClick={null} />
        <Square value={7} onClick={null} />
        <Square value={8} onClick={null} />
      </div>
    </div>
  );
};

export default Grid;
