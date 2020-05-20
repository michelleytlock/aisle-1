"use strict";

//buildDOM function
function buildDom(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.children[0];
}

//Main game to load onto page
function main() {
  let game;
  let splashScreen;

  // create splash screen
  function createSplashScreen() {
    splashScreen = buildDom(`
        <main>
            <div class="container">
                <div id="title">
                    <h1>Aisle 1</h1>
                </div>
                <div id="instructions">
                    <h2>Instructions</h2>
                    <p>
                    Shop for everything on your list!<br>
                    Click on the corresponding items. 
                    </p>
                </div>
                <div class="input>
                    <label for="name">Name:</label>
                    <input type="text" id="name">
                </div>
                <div>
                    <button id="start-button" class="button">Start</button>
                </div>
            </div>
        </main>`);

    document.body.appendChild(splashScreen);

    let startButton = splashScreen.querySelector("#start-button");

    startButton.addEventListener("click", function () {
      startGame();
    });
  }

  //take away splash screen
  function removeSplashScreen() {
    splashScreen.remove();
  }

  //create game screen
  function createGameScreen() {
    let gameScreen = buildDom(`
    <main class="game game-container">
        
        <div class="shopping-list">
        <h1>Aisle 1</h1>
        <h2>Grocery List</h2>
            <ul>
                <li><img class="item1"></li>
                <li><img class="item2"></li>
                <li><img class="item3"></li>
                <li><img class="item4"></li>
                <li><img class="item5"></li>
            </ul>
        </div>
        <div class="canvas-container">
            <canvas></canvas>
        </div>
    </main>`);

    document.body.appendChild(gameScreen);
    return gameScreen;
  }

  //take away game screen
  function removeGameScreen() {
      game.gameScreen.remove();
  }

  //start the game
  function startGame() {
    removeSplashScreen();
    // removeGameOverScreen();

    let game = new Game();
    game.gameScreen = createGameScreen();

    game.start();
    game.startAnimation();

    game.canvas.addEventListener("mousedown", function (e) {
      game.getMousePosition(game.canvas, e);
      game.checkItemPosition();
    });
  }
    createSplashScreen();
}
//execute function main() once page loads
window.addEventListener("load", main);
