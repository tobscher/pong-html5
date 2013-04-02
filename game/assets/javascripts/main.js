(function ($) {
  function Main() {
    var stage = new createjs.Stage("stage");
    var game  = new Game(stage);

    document.onkeydown = handleKeyDown;
    document.onkeyup =  handleKeyUp;

    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick(event) {
      stage.update();
    }

    function handleKeyDown(e) {
      if(!e){ var e = window.event; }

      switch(e.keyCode) {
        case 38: game.leftPlayer.moveUp(); return false;
        case 40: game.leftPlayer.moveDown(); return false;
      }
    }

    function handleKeyUp(e) {
      if(!e){ var e = window.event; }
    }
  };

  window.Main = Main;
}(jQuery));
