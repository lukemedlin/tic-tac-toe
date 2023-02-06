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

  const setValue = (x, y, player) => {
    board[x][y] = player;
  };

  const markSpot = (event) => {
    board[event.currentTarget.dataset.row][event.currentTarget.dataset.col] = 'O'
    render();
  }

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
    setValue,
    render,
  };
})();
