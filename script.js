const gameBoard = (() => {
  let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];
  let recentMoveRow;
  let recentMoveCol;

  const gameBoardDiv = document.querySelector('.game-grid');
  const gameSpotDivs = document.querySelectorAll('.game-spot');

  const getValue = (x, y) => {
    return board[x][y];
  };

  const resetBoard = () => {
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' '],
    ];
    render();
  };

  const checkWinner = () => {
    if (board[recentMoveRow].every((value) => value === game.getTurn().mark)) {
      console.log(game.getTurn().name + ' has won!');
    } else if (
      board[0][recentMoveCol] === game.getTurn().mark &&
      board[1][recentMoveCol] === game.getTurn().mark &&
      board[2][recentMoveCol] === game.getTurn().mark
    ) {
      console.log(game.getTurn().name + ' has won!');
    } else if (
      board[0][0] === game.getTurn().mark &&
      board[1][1] === game.getTurn().mark &&
      board[2][2] === game.getTurn().mark
    ) {
      console.log(game.getTurn().name + ' has won!');
    } else if (
      board[2][0] === game.getTurn().mark &&
      board[1][1] === game.getTurn().mark &&
      board[0][2] === game.getTurn().mark
    ) {
      console.log(game.getTurn().name + ' has won!');
    } else if (
      !board.flat().some(val => val === ' ')
    ) {
      console.log('You\'ve tied!');
    }
  };

  const markSpot = (event) => {
    if (
      board[event.currentTarget.dataset.row][
        event.currentTarget.dataset.col
      ] === ' '
    ) {
      board[event.currentTarget.dataset.row][event.currentTarget.dataset.col] =
        game.getTurn().mark;
      recentMoveRow = event.currentTarget.dataset.row;
      recentMoveCol = event.currentTarget.dataset.col;
      checkWinner();
      game.nextTurn();
      render();
    }
  };

  gameSpotDivs.forEach((div) => div.addEventListener('click', markSpot));

  const render = () => {
    let child = 0;
    for (let row = 0; row < board[0].length; row += 1) {
      for (let col = 0; col < board.length; col += 1) {
        gameSpotDivs[child].textContent = board[row][col];
        child += 1;
      }
    }
  };

  return {
    getValue,
    resetBoard,
    render,
  };
})();

const Player = (name, mark) => {
  return {
    name,
    mark,
  };
};

const game = (() => {
  let playerOne = Player('Luke', 'X');
  let playerTwo = Player('Garett', 'O');
  let turn = playerOne;

  const nextTurn = () => {
    turn === playerOne ? (turn = playerTwo) : (turn = playerOne);
  };

  const getTurn = () => {
    return turn;
  };

  const getPlayerOne = () => {
    return playerOne.name;
  };

  const getPlayerTwo = () => {
    return playerTwo.name;
  };

  return {
    getPlayerOne,
    getPlayerTwo,
    nextTurn,
    getTurn,
  };
})();
