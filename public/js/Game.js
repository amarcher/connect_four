FIRST_PLAYER = 'B';

function Game() {
  this.board = null;
  this.activePlayer = FIRST_PLAYER;
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
