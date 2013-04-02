(function ($) {
  var Delimiter = function() {
    this.initialize();
  }

  var p = Delimiter.prototype = new createjs.Container();

  p.Container_initialize = p.initialize;

  p.initialize = function(font, color) {
    this.Container_initialize();

    this.graphics = new createjs.Graphics()
      .setStrokeStyle(1)
      .beginStroke("#ffffff")
      .moveTo(320,0)
      .lineTo(320,480);
    this.delimiter = new createjs.Shape(this.graphics);

    this.addChild(this.delimiter);
  }

  window.Delimiter = Delimiter;
}(jQuery));
