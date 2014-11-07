function View() {
  this.buttons = $("button");
}

// View.prototype.bindEventListeners = function() {
//   var self = this;

//     $("button").on("click", function(e) {
//       var colClicked = e.currentTarget.name.slice(-1);
//       self.incrementClickCount();
//       self.addNextMove(colClicked);
//     })
// };

// View.prototype.addNextMove = function(colClicked) {
//   var rowNum = placePiece(colClicked, this.currentColor);
//   $piece = $('<p class="' + this.currentColor + '"></p>');
//   $('#col' + colClicked + ' #row0').innerHTML($piece);

//   $("#col" + colClicked + " #row" + rowNum).addClass(this.currentColor);
// };

View.prototype.renderPiece = function(rowNum, colClicked, currentColor) {
  var pieceColor;
  if (currentColor === "B") {
    pieceColor = "black";
  } else if (currentColor === "R") {
    pieceColor = "red";
  }
  // $piece = $('<p class="' + this.currentColor + '"></p>');
  // $('#col' + colClicked + ' #row0').innerHTML($piece);
  $("#col" + colClicked + " #row" + rowNum).addClass(pieceColor);
}

// View.prototype.currentColor = function() {
//   return (this.clickCount % 2 === 0) ?  "black" : "red"
// };

// View.prototype.incrementClickCount = function() {
//   this.clickCount += 1;
// };
