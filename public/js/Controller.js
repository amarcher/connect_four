function Controller(model, view) {
  this.model  = model;
  this.view = view;
}

Controller.prototype.bindEventListeners = function() {
  self = this;
  this.view.buttons.on("click", function(e) {
    var colClicked = e.currentTarget.name.slice(-1);
    self.addNextMove(colClicked);
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
