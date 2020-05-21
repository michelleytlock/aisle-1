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
  let inputName;
  let splashScreen;
  let gameOverScreen;

  // create splash screen
  function createSplashScreen() {
    splashScreen = buildDom(`
        <main>
            <embed loop="true" src="./sounds/splash-screen-music.mp3" hidden="true" type="audio/mpeg"></embed>
            <div class="splash">
                <div id="title">
                    <h1>Aisle 1</h1>
                </div>
                <div id="instructions">
                    <h2>Instructions</h2>
                    <p>
                    Grab everything on your grocery list!<br>
                    Click on the corresponding items within the time limit.<br>
                    If you're not fast enough, game over! 
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
  }

  //create game screen
  function createGameScreen() {
    let gameScreen = buildDom(`
    <main class="game game-container">
        <h1>Aisle 1</h1>
        <div class="game-content">
          <div class="shopping-list">
            <h3 id="timer">Time Remaining: 60s</h3>
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
    console.log(scoreRanking);
    console.log(scoreRanking[0].score)
    
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    let score4 = 0;
    let score5 = 0;

    if (scoreRanking && scoreRanking[0]) {
      score1 = scoreRanking[0].score;
    } 

    if (scoreRanking && scoreRanking[1]) {
      score2 = scoreRanking[1].score;
    } 

    if (scoreRanking && scoreRanking[2]) {
      score3 = scoreRanking[2].score;
    } 

    if (scoreRanking && scoreRanking[3]) {
      score4 = scoreRanking[3].score;
    } 

    if (scoreRanking && scoreRanking[4]) {
      score5 = scoreRanking[4].score;
    } 

    gameOverScreen = buildDom(`
    <main>
      <div class="game-over">
        <div>
          <h1>Game Over!</h1>
        </div>
        <div>
          <h2>Your Score is: ${score}</h2>
        </div>
        <div class="scoreboard">
          <h2>High Scores:</h2>
          <ul>
            <li>${score1}</li>
            <li>${score2}</li>
            <li>${score3}</li>
            <li>${score4}</li>
            <li>${score5}</li>
          </ul>
        </div>
        <div class="input">
          <label for="name">Name:</label>
          <input type="text" id="name" maxlength="24">
          <button id="restart-button" class="button">Restart</button>
      </div>
    </main>`);

    document.body.appendChild(gameOverScreen);

    let button = gameOverScreen.querySelector("button");

    button.addEventListener("click", startGame);
  }

  function removeGameOverScreen() {
    if (gameOverScreen !== undefined) {
      gameOverScreen.remove();
      console.log('hi')
    }
  }

  //start the game
  function startGame() {

    if (!document.querySelector("input").value) {
      inputName = "Needy Shopper";
    } else {
      inputName = document.querySelector("input".value);
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
