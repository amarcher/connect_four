FIRST_PLAYER = 'B';
MODES = ['localMode', 'vsCPU', 'lanParty' ]

function Game() {
  this.board = null;
  this.activePlayer = FIRST_PLAYER;
  this.mode = MODES[0]  // localMode
}

Game.prototype.use = function(board) {
  this.board = board;
};

Game.prototype.toggleActivePlayer = function(player) {
  if (this.activePlayer === 'B') {
    this.activePlayer = 'R';
  } else {
    this.activePlayer = 'B';
  }
};

Game.prototype.isWon = function(){
  return this.board.hasWinner();
};

Game.prototype.placePiece = function(col){
  return this.board.placePiece(col, this.activePlayer);
};

Game.prototype.switchMode = function() {
}

Game.prototype.isBoardFull = function() {
  return this.board.isBoardFull();

}

Game.prototype.findANonFullColumn = function() {
  var colArray = [0,1,2,3,4,5,6];
  var shuffledArray = this.shuffleArray(colArray);
  self = this;
  shuffledArray.forEach(function(element, index, array) {
    if( ! self.board.full(element)) {
      return element;
    }
  });
};

Game.prototype.shuffleArray = function(array) {
  for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
  return array;
};
