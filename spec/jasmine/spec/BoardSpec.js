describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it("should be initialized with a blank board", function() {
    expect(board.columns).toEqual([ [], [], [], [], [], [], [] ]);
  });

  it("should change when a piece is added", function() {
    board.placePiece(0,'B');
    expect(board.columns).not.toEqual([ [], [], [], [], [], [], [] ]);
  });

  it("should return the square to which a piece dropped when one is added", function() {
    expect(board.placePiece(0,'B')).toEqual(5);
  });

  describe("hasFourInARow", function() {
    var row

    beforeEach(function() {
      row = []
    });

    it("should return true if there is 4 in a row", function() {
      row = ['R','R','R','R','B','B']
      expect(board.hasFourInARow(row)).toEqual(true);
      row = ['R','R','B','B','B','B']
      expect(board.hasFourInARow(row)).toEqual(true);
    });

    it("should return false if there isn't 4 in a row", function() {
      row = ['R','R','R','B','B','B']
      expect(board.hasFourInARow(row)).toEqual(false);
    });

  });

  describe("checkColumns", function() {

    it("should return false if there aren't 4 in any columns", function() {
      expect(board.checkColumns()).toEqual(false);
    });

    it("should return true if there are 4 one column", function() {
      for(var i=0; i < 4; i++){
        board.placePiece(0,'B');
      };
      expect(board.checkColumns()).toEqual(true);
    });
  });

  describe("checkRows", function() {

   it("should return false if there aren't 4 in any rows", function() {
     expect(board.checkRows()).toEqual(false);
   });

   it("should return true if there are 4 one row", function() {
     for(var i=0; i < 4; i++){
       board.placePiece(i,'B');
     };
     expect(board.checkRows()).toEqual(true);
   });
 });

   describe("checkDiagonals", function() {

    it("should return false if there aren't 4 in any columns", function() {
      expect(board.checkDiagonals()).toEqual(false);
    });

    it("should return true if there are 4 one row", function() {
      for(var i=0; i < 4; i++){
        board.placePiece(i,'B');
        board.placePiece(i,'B');
        board.placePiece(i,'B');
        board.placePiece(i,'B');
      };
      expect(board.checkDiagonals()).toEqual(true);
    });
  });
});
