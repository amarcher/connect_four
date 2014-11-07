function Controller(model, view) {
  this.model  = model;
  this.view = view;
}

Controller.prototype.bindEventListeners = function() {
  self = this;
  $(document).on("click", self.view.buttons, function(e) {
    console.log(self);
    console.log(this);
    console.log(e.target);
    if (e.target.name === "reset-button") {
      self.resetBoard();
      self.resetView();
    } else {
      var colClicked = e.target.name.slice(-1);
      self.addNextMove(colClicked);
    };
  });
};

Controller.prototype.addNextMove = function(colClicked) {
  var rowNum = this.model.placePiece(colClicked, this.model.activePlayer);
  if (rowNum >= 0) {
    this.view.renderPiece(rowNum, colClicked, this.model.activePlayer);
    if (this.model.isWon()) {
      this.view.renderWinner(this.model.activePlayer);
    } else {
      this.model.toggleActivePlayer();
    }
  } else {
    this.view.columnFullError();
  }
};

Controller.prototype.resetBoard = function() {
  var board = new Board();
  this.model.use(board);
};

Controller.prototype.resetView = function() {
  this.view.resetView();
};
