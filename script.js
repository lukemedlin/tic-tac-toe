const gameBoard = (() => {
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];

  const gameBoardDiv = document.querySelector('.game-grid');
  const gameSpotDivs = document.querySelectorAll('.game-spot');

  const getValue = (x, y) => {
    return board[x][y];
  };

  const markSpot = (event) => {
    if (
      board[event.currentTarget.dataset.row][
        event.currentTarget.dataset.col
      ] === ' '
    ) {
      board[event.currentTarget.dataset.row][event.currentTarget.dataset.col] =
        game.getTurn();
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
  let turn = 'X';

  const nextTurn = () => {
    turn === 'X' ? (turn = 'O') : (turn = 'X');
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
