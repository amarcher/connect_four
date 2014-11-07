$(document).ready(function() {
  var theView = new View();
  var game = new Game();
  var board = new Board();
  game.use(board);

  controller = new Controller(game, theView);
  controller.bindEventListeners();
});
