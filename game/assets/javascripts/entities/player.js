(function ($) {
  var Player = function(type) {
    this.initialize(type);
  }

  var p = Player.prototype = new createjs.Container();

  p.Container_initialize = p.initialize;

  p.initialize = function(type) {
    this.Container_initialize();
    this.paddleOffset = type == "left" ? 10 : 640 - 20;
    this.scoreOffset = type == "left" ? 640 / 2 - 50 : 640 / 2 + 50;

    var graphics = new createjs.Graphics().beginFill("#ffffff").drawRect(0,0,10,100);
    this.player = new createjs.Shape(graphics);
    this.player.x = this.paddleOffset;
    this.player.y = 200;

    this.score = new createjs.Text("0", "20px Arial", "#ffffff");
    this.score.y = 10;
    this.score.x = this.scoreOffset;

    this.addChild(this.player);
    this.addChild(this.score);
  }

  window.Player = Player;
}(jQuery));
