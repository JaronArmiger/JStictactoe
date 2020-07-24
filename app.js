const gameBoard = (() => {

  let board = [[null,null,null],
  			   [null,null,null],
  			   [null,null,null]];
  const getBoard = () => board;
  const updateBoard = (location, sym) => {
  	const x = location[0];
  	const y = location[1];
  	board[x][y] = sym;
  	displayController.display();
  	console.log(board);
  }
  return {
  	getBoard, updateBoard
  };
})();

const gamePlay = (() => {
  const move = () => {

  };
})();

const displayController = (() => {
  const display = () => {
  	const board = gameBoard.getBoard();
  	for ( let i = 0; i < 3; i++) {
  	  for ( let j = 0; j < 3; j++) {
  	    const square = document.querySelector(`.square-${i}-${j}`);
  	    square.textContent = board[i][j];
  	  } 
  	}
  }
  return {
  	display
  };
})();

const Player = (name,sym) => {
  const getName = () => name;
  const getSym = () => sym;
  return { getName, getSym }
};

const squares = document.querySelectorAll(".square");
squares.forEach( square => square.addEventListener('click', (e) => {
  console.log(e.target);
}));