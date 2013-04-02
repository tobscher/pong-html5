(function ($) {
  var Ball = function(game) {
    this.initialize(game);
  }

  var p = Ball.prototype = new createjs.Container();

  p.BALL_VELOCITY_X = -3
  p.BALL_VELOCITY_Y = -1
  p.BALL_SIZE = 6

  p.Container_initialize = p.initialize;

  p.initialize = function(game) {
    this.Container_initialize();

    this.game = game;

    this.canvas = $("#stage");

    var x = this.canvas.width()/2;
    var y = this.canvas.height()/2;

    var graphics = new createjs.Graphics().beginFill("#ffffff").drawCircle(0,0,p.BALL_SIZE);
    this.ball = new createjs.Shape(graphics);
    this.ball.x = x;
    this.ball.y = y;

    this.addChild(this.ball);
  }

  p.Container_tick = p._tick;

  p._tick = function(target, type, params) {
    this.Container_tick(target, type, params);

    this.ball.x += p.BALL_VELOCITY_X;
    this.ball.y += p.BALL_VELOCITY_Y;

    var minX = this.ball.x - p.BALL_SIZE;
    var minY = this.ball.y - p.BALL_SIZE;
    var maxX = this.ball.x + p.BALL_SIZE;
    var maxY = this.ball.y + p.BALL_SIZE;

    if (minX <= 0) {
      p.BALL_VELOCITY_X *= -1;
      this.game.rightPlayer.scorePoint();
    }

    if (maxX >= this.canvas.width()) {
      p.BALL_VELOCITY_X *= -1;
      this.game.leftPlayer.scorePoint();
    }

    if (minY <= 0 || maxY >= this.canvas.height()) {
      p.BALL_VELOCITY_Y *= -1;
    }

    if (minX <= this.game.leftPlayer.maxX() && minY >= this.game.leftPlayer.minY() && minY <= this.game.leftPlayer.maxY()) {
      p.BALL_VELOCITY_X *= -1;
    }

    if (maxX >= this.game.rightPlayer.minX() && minY >= this.game.rightPlayer.minY() && minY <= this.game.rightPlayer.maxY()) {
      p.BALL_VELOCITY_X *= -1;
    }
  };

  window.Ball = Ball;
}(jQuery));
