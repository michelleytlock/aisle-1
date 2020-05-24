"use strict";

let splashScreenMusic = new Audio("./sounds/splash-screen-music.mp3");
let gameOverMusic = new Audio("./sounds/game-over-screen-music.mp3");

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
  let gameOverScreen;
  

  // create splash screen
  function createSplashScreen() {
    splashScreen = buildDom(`
        <main>
            <div class="splash">
                <div id="title">
                    <h1>Aisle 1</h1>
                </div>
                <div id="instructions">
                    <h2>Instructions</h2>
                    <p>
                    Grab everything on your grocery list! Click on the corresponding items within the time limit.<br>
                    <b>Make sure you're only clicking on items when they are above your shopping cart!</b>
                    </p>
                </div>
                <div class="input">
                    <label for="name">Name:</label>
                    <input type="text" id="name" maxlength="24">
                </div>
                <div>
                    <button id="start-button" class="button">Start</button>
                </div>
            </div>
        </main>`);

    document.body.appendChild(splashScreen);

    let startButton = splashScreen.querySelector("#start-button");
    
    splashScreenMusic.volume = 0.3;
    splashScreenMusic.loop = true;
    splashScreenMusic.play();

    function clickSound() {
      let click = new Audio("./sounds/button.ogg");
      click.play();
    }

    startButton.addEventListener("click", function () {
      startGame();
      clickSound();
    });
  }

  //take away splash screen
  function removeSplashScreen() {
    splashScreen.remove();
    splashScreenMusic.pause();
  }

  //create game screen
  function createGameScreen() {
    let gameScreen = buildDom(`
    <main class="game game-container">
        <h1>Aisle 1</h1>
        <div class="game-content">
          <div class="shopping-list">
            <h3 id="timer">Time Remaining: 30s</h3>
            <h3>Score:</h3><span class="score"></span>
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
        </div>
    </main>`);

    document.body.appendChild(gameScreen);
    return gameScreen;
  }

  //take away game screen
  function removeGameScreen() {
    game.gameScreen.remove();
  }

  function createGameOverScreen(score) {
    let scoreRanking = JSON.parse(localStorage.getItem("score"));
    
    let score1;
    let score2;
    let score3;
    let score4;
    let score5;

    if (scoreRanking && scoreRanking[0]) {
      score1 = `${scoreRanking[0].name} : ${scoreRanking[0].score}`;
    } else {
      score1 = "Shopper : 0";
    }

    if (scoreRanking && scoreRanking[1]) {
      score2 = `${scoreRanking[1].name} : ${scoreRanking[1].score}`;
    } else {
      score2 = "Shopper : 0";
    }

    if (scoreRanking && scoreRanking[2]) {
      score3 = `${scoreRanking[2].name} : ${scoreRanking[2].score}`;
    } else {
      score3 = "Shopper : 0";
    }

    if (scoreRanking && scoreRanking[3]) {
      score4 = `${scoreRanking[3].name} : ${scoreRanking[3].score}`;
    } else {
      score4 = "Shopper : 0";
    }

    if (scoreRanking && scoreRanking[4]) {
      score5 = `${scoreRanking[4].name} : ${scoreRanking[4].score}`;
    } else {
      score5 = "Shopper : 0";
    }

    gameOverScreen = buildDom(`
    <main>
      <div class="game-over-image">
        <div class="game-over-content">
          <div>
            <h1>Game Over!</h1>
          </div>
          <div>
            <h2>Your Score is: ${score}</h2>
          </div>
          <div class="scoreboard">
            <h3>High Scores:</h3>
            <ul>
              <li>${score1}</li>
              <li>${score2}</li>
              <li>${score3}</li>
              <li>${score4}</li>
              <li>${score5}</li>
            </ul>
          </div>
          <div class="input game-over">
            <label for="name">Name:</label>
            <input type="text" id="name" maxlength="24">
          </div>
          <div>
            <button id="restart-button" class="button">Restart</button>
          </div>
        </div>
      </div>
    </main>`);

    document.body.appendChild(gameOverScreen);

    gameOverMusic.volume = 0.05;
    gameOverMusic.loop = true;
    gameOverMusic.play();

    let button = gameOverScreen.querySelector("button");

    function clickSound() {
      let click = new Audio("./sounds/button.ogg");
      click.play();
    }

    button.addEventListener("click", function () {
      startGame();
      clickSound();
    });
  }

  function removeGameOverScreen() {
    if (gameOverScreen !== undefined) {
      gameOverScreen.remove();
      gameOverMusic.pause();
    }
  }

  //start the game
  function startGame() {
    let inputName = '';

    if (!document.querySelector("input").value) {
      inputName = "Shopper";
    } else {
      inputName = document.querySelector("input").value;
    }

    removeSplashScreen();
    removeGameOverScreen();

    game = new Game(inputName, gameOver);
    game.gameScreen = createGameScreen();
    
    game.start();
    
    game.canvas.addEventListener("mousedown", function (e) {
      game.getMousePosition(game.canvas, e);
      game.checkPositions();
      // game.clickItem.play();
    });
  }

  function gameOver(score) {
    removeGameScreen();
    createGameOverScreen(score);
  }

  createSplashScreen(); //call Splash Screen at beginning with main()
}

//execute function main() once page loads
window.addEventListener("load", main);
