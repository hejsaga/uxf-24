import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button onClick={onSquareClick} className="square">
      {value}
    </button>
  );
};

const Board = () => {
  const array = Array(9).fill(null);
  const [squares, setSquares] = useState(array);

  const handleClick = (index) => {
    const nextSquares = squares.slice();
    nextSquares[index] = "X";
    setSquares(nextSquares);
  };

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
