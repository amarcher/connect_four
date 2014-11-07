function View() {
  this.buttons = $("button");
}

View.prototype.renderPiece = function(rowNum, colClicked, currentColor) {
  var pieceColor = this.getColor(currentColor);
  // $piece = $('<p class="piece ' + this.currentColor + '"></p>');
  // $('#col' + colClicked + ' #row0').innerHTML($piece);
  $("#col" + colClicked + " #row" + rowNum).addClass(pieceColor);
};

View.prototype.renderWinner = function(winnerColor) {
  var winner = this.getColor(winnerColor);
  alert(winner + " is the winner!");
};

View.prototype.columnFullError = function() {
  alert("Column's full. Pick another column.");
};

View.prototype.getColor = function(character) {
  console.log('in getColor');
  if (character === "B") {
    return "black";
  } else if (character === "R") {
    return "red";
  }
}