import { Fragment, useState } from 'react';
import {
  PLAY_AGAIN,
  TIC_TAC_TOE_GAME,
  WON_THE_GAME,
} from '../constants/constants';
import SquareComponent from './SquareComponent';

const TicTacToeBoard = () => {
  const [gameState, setGameState] = useState<string[]>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState<boolean>(true);

  const handleSquareClick = (index: string) => {
    if (checkWinner() != null || gameState[Number(index)]) {
      return;
    }
    const gameStateCopy = [...gameState];
    gameStateCopy[Number(index)] = isXTurn ? 'X' : 'O';
    setGameState(gameStateCopy);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const winnerlines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerlines.length; i++) {
      const [a, b, c] = winnerlines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };

  const handleGameReset = () => {
    setGameState(Array(9).fill(null));
  };

  const renderSquare = (index: string) => {
    return (
      <SquareComponent
        squareSizeType='XXL'
        squareBorderThickness={'2'}
        squareBorderColor={'border-black'}
        handleClick={() => handleSquareClick(index)}
        squareText={gameState[Number(index)]}
      />
    );
  };

  const isWinner = checkWinner();

  return (
    <Fragment>
      <h1 className='font-extrabold text-blue-700'>{TIC_TAC_TOE_GAME}</h1>
      {isWinner ? (
        <p className='text-green-500 font-bold'>
          {isWinner}
          {WON_THE_GAME}
          <button
            onClick={handleGameReset}
            className='bg-blue-700 text-white border-2 border-black ml-2'>
            {PLAY_AGAIN}
          </button>
        </p>
      ) : (
        ''
      )}
      <div className='flex'>
        {renderSquare('0')}
        {renderSquare('1')}
        {renderSquare('2')}
      </div>
      <div className='flex'>
        {renderSquare('3')}
        {renderSquare('4')}
        {renderSquare('5')}
      </div>
      <div className='flex'>
        {renderSquare('6')}
        {renderSquare('7')}
        {renderSquare('8')}
      </div>
    </Fragment>
  );
};

export default TicTacToeBoard;
