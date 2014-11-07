describe("Game", function() {
  var game;
  var board;

  beforeEach(function() {
    board = new Board()
    game = new Game();
  });

  it("should be able to create a Board", function() {
    game.use(board);
    expect(game.board).toEqual(board);
  });

  it("should be able to toggle the ActivePlayer", function() {
    game.use(board);
    game.toggleActivePlayer();
    expect(game.activePlayer).not.toEqual(FIRST_PLAYER);
  });

  it("Should start at a non winning state", function() {
    game.use(board);
    expect(game.isWon()).toEqual(false);
  });
});
