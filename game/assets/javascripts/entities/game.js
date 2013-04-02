(function ($) {
  function Game(stage) {
    this.ball = new Ball(this);
    this.leftPlayer = new Player("left");
    this.rightPlayer = new Player("right");
    this.delimiter = new Delimiter();
    this.counter = new FrameCounter("20px Arial", "#555");

    stage.addChild(this.delimiter);
    stage.addChild(this.ball);
    stage.addChild(this.leftPlayer);
    stage.addChild(this.rightPlayer);
    stage.addChild(this.counter);
  }

  window.Game = Game;
}(jQuery));
