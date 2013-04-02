(function ($) {
  var FrameCounter = function(font, color) {
    this.initialize(font, color);
  }

  var p = FrameCounter.prototype = new createjs.Container();

  p.Container_initialize = p.initialize;

  p.initialize = function(font, color) {
    this.Container_initialize();

    this.counter = new createjs.Text(null, font, color);
    this.addChild(this.counter);
  }

  p.Container_tick = p._tick;

  p._tick = function(target, type, params) {
    this.Container_tick(target, type, params);
    this.counter.text = "FPS:" + createjs.Ticker.getMeasuredFPS();
  };

  window.FrameCounter = FrameCounter;
}(jQuery));
