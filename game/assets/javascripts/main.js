(function ($) {
  function Main() {
    var stage = new createjs.Stage("stage");
    new Game(stage);

    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick(event) {
      stage.update();
    }
  };

  window.Main = Main;
}(jQuery));
