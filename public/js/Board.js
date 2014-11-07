ROWS = 6;

function Board() {
  this.columns = [ [], [], [], [], [], [], [] ];
}

Board.prototype.placePiece = function(columnNumber, color) {
  if (! this.full(columnNumber) ) {
    this.columns[columnNumber].push(color);
    var rowIndex = ROWS - this.columns[columnNumber].length;
    return rowIndex; // where piece dropped
  } else {
    console.log('full');
    return false;
  }
};

Board.prototype.full = function(columnNumber) {
  return this.columns[columnNumber].length > ROWS;
};

Board.prototype.hasFourInARow = function(row){
  var stringJoin = row.join("");
  if (stringJoin.indexOf("RRRR") != -1) {
    return true;
  } else if (stringJoin.indexOf("BBBB") != -1) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.checkColumns = function() {
  for(var i=0;i < this.columns.length; i++){
    if (this.hasFourInARow(this.columns[i])) {
      console.log('columns!: ' + i + ' ' + this.columns[i]);
      return true;
    }
  }
  return false;
};

Board.prototype.checkRows = function() {
  var rows = [ [], [], [], [], [], [] ];
  for(var j=0; j < rows.length; j++) {
    for(var i=0; i < this.columns.length; i++){
      if (this.columns[i][j] != "B" && this.columns[i][j] != "R") {
        rows[j].push("N");
      } else {
        rows[j].push(this.columns[i][j]);
      }
    }
  }
  for(var i = rows.length - 1; i >= 0; i--){
    if (this.hasFourInARow(rows[i])) {
      console.log('rows!: ' + i + ' ' + rows[i])
      return true;
    }
    console.log('rows[' + i + ']: ' + rows[i])
  }
  return false;
};

Board.prototype.checkDiagonals = function() {
  var c = this.columns;
  var downright_diagonals = [ [ c[0][3],c[1][2],c[2][1],c[3][0] ],
                              [ c[0][4],c[1][3],c[2][2],c[3][1],c[4][0] ],
                              [ c[0][5],c[1][4],c[2][3],c[3][2],c[4][1],c[5][0] ],
                              [ c[1][5],c[2][4],c[3][3],c[4][2],c[5][1],c[6][0] ],
                              [ c[2][5],c[3][4],c[4][3],c[5][2],c[6][1] ],
                              [ c[3][5],c[4][4],c[5][3],c[6][2] ]
                            ];
  var downleft_diagonals =  [ [ c[0][2],c[1][3],c[2][4],c[3][5] ],
                              [ c[0][1],c[1][2],c[2][3],c[3][4],c[4][5] ],
                              [ c[0][0],c[1][1],c[2][2],c[3][3],c[4][4],c[5][5] ],
                              [ c[1][0],c[2][1],c[3][2],c[4][3],c[5][4],c[6][5] ],
                              [ c[2][0],c[3][1],c[4][2],c[5][3],c[6][4] ],
                              [ c[3][0],c[4][1],c[5][2],c[6][3] ]
                            ];

  for(var i=0; i < downright_diagonals.length; i++){
    if (this.hasFourInARow(downright_diagonals[i])) {
      console.log('downright_diagonals!: ' + i + ' ' + downright_diagonals[i]);
      return true;
    }
  }
  for(var i=0; i < downleft_diagonals.length; i++){
    if (this.hasFourInARow(downleft_diagonals[i])) {
      console.log('downleft_diagonals!: ' + i + ' ' + downleft_diagonals[i]);
      return true;
    }
  }
  return false;
};


Board.prototype.hasWinner = function() {
  if (this.checkColumns() || this.checkRows() || this.checkDiagonals()) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.isBoardFull = function() {
  var colFullArray = [];

  for(var i=0; i < this.columns.length; i++) {
    colFullArray.push(this.columns[i].full);
  }

  for(var i=0; i < colFullArray.length; i++) {
    if (colFullArray[i] === false ) {
      return false;
    };

    return true;
  };
};
