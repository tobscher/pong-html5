(function ($) {
  var Ball = function() {
    this.initialize();
  }

  var p = Ball.prototype = new createjs.Container();

  p.Container_initialize = p.initialize;

  p.initialize = function(font, color) {
    this.Container_initialize();

    var graphics = new createjs.Graphics().beginFill("#ffffff").drawCircle(0,0,3);
    this.ball = new createjs.Shape(graphics);
    this.ball.x = 100;
    this.ball.y = 100;

    this.addChild(this.ball);
  }

  window.Ball = Ball;
}(jQuery));
