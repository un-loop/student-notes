//Sean O'Dell 06/07/2020

//sensei: eugene-bulkin

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).

// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.









//although we assume input will be 3*3 array, function written 
//to accept any n*m array where ((n & m) > 3 && n < m) that contains only 3 different possible values, 1 of which being 0
//The win condition is having only your symbol in a straight line from one side of
//the board to the opposite side.
function isSolved(board) {
  //possible values: 1,2,false
    const horizontal = board.find(elem => winCheck(elem));
    if(horizontal){
    //winner on horizontal
      return horizontal[0];
    };
    //manipulates array by rotating values 90 degrees
    //[[0, 0, 1], => [[0,0,2],
   //  [0, 1, 2], =>  [0,1,1],
   //  [2, 1, 0]] =>  [1,2,0]]
    let vertHolder = [];
    for(let diff = board[0].length + (board[0].length - board.length); diff > 0; diff--){
      vertHolder.push([]);
    };
    for(let h = 0; h < board.length; h++){
      for(let g = 0; g < board[0].length; g++){
        vertHolder[g].push(board[h][g]);
      };
    };
    const vertical = vertHolder.find(elem => winCheck(elem));
    if (vertical){
    //winner on vertical
      return vertical[0];
    };
  //takes board as input and outputs 2+2(m-n)*m array to test diagonal win condition
  //x => x-axis, y => y-axis;
  //diff is n-m (diff <= 0), used for non-square boards with >2 diagonal win conditions
    let diagHolder = []
    for(
      let diff = (board.length - board[0].length);
      diff <= 0;
      diff++){
        diagHolder.push([])
        diagHolder.push([])
        //could shorten to '-diff' but used '0 - diff' to maintain convention with next for-loop
        for (let x = 0 - diff, y = 0; y < board.length; x++, y++){
          diagHolder[diff].push(board[y][x]);
        };
        for (let x = 0 - diff, y = board.length - 1; y >= 0; x++, y--){
          diagHolder[diff+1].push(board[y][x]);
        };
      };
      const diagonal = diagHolder.find(elem => winCheck(elem));
      if (diagonal){
      //winner on diagonal
        return diagonal[0];
      };
      //checks if there are any open spaces, if not, declares cat's game
      if(board.some(arr => arr.some(elem => elem === 0))){
      //game not over
        return -1
      } else {
      //cat's game
        return 0
      }
  };
  
  //checks array of arrays to test if each element inside arr is equal.
  //if so, and that value is not 0, output the value they all equal.
  //else, output -1
  const winCheck = (arr) => {
    for(let i = 0; i < arr.length; i++){
      if(arr.every(elem => (elem === arr[i] && elem !== 0))){
      //someone won
        return arr[i];
      };
    };
    //no one has won yet
    return false;
  };