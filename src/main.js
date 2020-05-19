"use strict";

//buildDOM function
function buildDom(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
}

//Main game to load onto page
function main() {
    startGame();
}

//create splash screen
// function createSplashScreen() {
//     splashScreen = buildDom(`
//         <main>
//             <div class="container">
//                 <img src="">
//                 <div id="title">
//                     <h1>Aisle 1</h1>
//                 </div>
//                 <div id="instructions">
//                     <h2>Instructions</h2>
//                     <p>
//                     Shop for everything on your list!<br>
//                     Click on the corresponding items. 
//                     </p>
//                 </div>
//                 <div class="input>
//                     <label for="name">Name:</label>
//                     <input type="text" id="name">
//                     <button id="start-button" class="button">Start</button>
//                 </div>
//             </div>
//         </main>`);
    
//     document.body.appendChild(splashScreen);

//     let startButton = splashScreen.querySelector("#start-button");

//     startButton.addEventListener("click", function () {
//         startGame();
//     });
// }

// //take away splash screen
// function removeSplashScreen() {
//     splashScreen.remove();
// }

//create game screen
function createGameScreen() {
    let gameScreen = buildDom(`
    <main class="game game-container">
        <div class="shopping-list">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
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
    // removeSplashScreen();
    // removeGameOverScreen();

    let game = new Game();
    game.gameScreen = createGameScreen();

    game.start();
    game.draw();
    // game.clicking();
    
    document.addEventListener("mousedown", function (e) {
        console.log(this);
        game.getMousePosition(game.canvas, e);
      });
    
}

//execute function main() once page loads
window.addEventListener('load', main);