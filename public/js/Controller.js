function Controller(model, view) {
  this.model  = model;
  this.view = view;
}

Controller.prototype.bindEventListeners = function() {
  var self = this;
  $(document).on("click", self.view.buttons, function(e) {
    if (e.target.name === "reset-button") {
      self.resetBoard();
      self.resetView();
    } else if (e.target.name === 'lan-party') {
      self.switchMode('lan-party');
    } else if (e.target.name === 'local-mode') {
      self.switchMode('local-mode');
    } else if (e.target.name === 'vs-cpu') {
      self.switchMode('vs-cpu');
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
      if (this.model.mode === MODES[1] && this.model.activePlayer === 'R' ) { // local-mode
        setTimeout(this.takeComputerTurn.bind(this),400);
      }
    }
  } else {
    this.view.columnFullError();
  }

  if (this.model.isBoardFull()) {
    this.view.boardIsFull();
  }
};

Controller.prototype.resetBoard = function() {
  var board = new Board();
  this.model.use(board);
};

Controller.prototype.resetView = function() {
  this.view.resetView();
};


Controller.prototype.switchMode = function(mode) {
  this.view.switchMode(mode);
  this.model.switchMode(mode);
  this.resetBoard();
  this.resetView();
};

Controller.prototype.takeComputerTurn = function () {
  var nonFullColumn = this.model.findANonFullColumn();
  var button = this.view.buttons.get(nonFullColumn);
  $(button).trigger('click').bind(this);
};
