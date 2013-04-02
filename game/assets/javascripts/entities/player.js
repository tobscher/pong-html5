(function ($) {
  var Player = function(type) {
    this.initialize(type);
  }

  var p = Player.prototype = new createjs.Container();

  p.Container_initialize = p.initialize;

  p.PLAYER_VELOCITY = 10;
  p.PADDLE_HEIGHT = 100;
  p.PADDLE_WIDTH = 10;
  p.SCORE_OFFSET = 50;

  p.initialize = function(type) {
    this.Container_initialize();
    this.canvas = $("#stage");

    this.paddleOffset = type == "left" ? 10 : this.canvas.width() - 20;
    this.scoreOffset = type == "left" ? this.canvas.width() / 2 - p.SCORE_OFFSET : this.canvas.width() / 2 + p.SCORE_OFFSET;

    var graphics = new createjs.Graphics().beginFill("#ffffff").drawRect(0,0,p.PADDLE_WIDTH,p.PADDLE_HEIGHT);
    this.player = new createjs.Shape(graphics);
    this.player.x = this.paddleOffset;
    this.player.y = this.canvas.height() / 2 - (p.PADDLE_HEIGHT / 2);

    this.scoreCount = 0;

    this.score = new createjs.Text(this.scoreCount, "20px Arial", "#ffffff");
    this.score.y = 10;
    this.score.x = this.scoreOffset;

    this.addChild(this.player);
    this.addChild(this.score);
  }

  p.moveUp = function() {
    if (this.player.y >= 0) {
      var velocity = this.player.y < p.PLAYER_VELOCITY ? this.player.y : p.PLAYER_VELOCITY;
      this.player.y -= velocity;
    }
  };

  p.moveDown = function() {
    var maxY = this.player.y + p.PADDLE_HEIGHT;
    var space = this.canvas.height() - maxY;

    if (space > 0) {
      var velocity = space < p.PLAYER_VELOCITY ? space : p.PLAYER_VELOCITY;
      this.player.y += p.PLAYER_VELOCITY;
    }
  };

  p.scorePoint = function() {
    this.scoreCount = this.scoreCount + 1;
    this.score.text = this.scoreCount;
  };

  p.minX = function() {
    return this.player.x;
  };

  p.minY = function() {
    return this.player.y;
  };

  p.maxX = function() {
    return this.player.x + p.PADDLE_WIDTH;
  };

  p.maxY = function() {
    return this.player.y + p.PADDLE_HEIGHT;
  };
  window.Player = Player;
}(jQuery));
