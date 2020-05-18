"use strict";

//buildDOM function
function buildDom(htmlString) {
    let div = document.createElement('div');
    div.innerHTML = htmlString;
    return div.children[0];
}

//Main game to load onto page
function main() {
    let game;
    let splashScreen;
    let gameOverScreen;
    let winGameScreen;
}

//create splash screen
function createSplashScreen() {
    splashScreen = buildDom(`
        <main>
            <div class="container">
                <img src="">
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
    var gameScreen = buildDom(`
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

function startGame() {
    removeSplashScreen();
    // removeGameOverScreen();

    game = new Game(inputName);
    game.gameScreen = createGameScreen();

    game.start();
}

//execute main function once page loads
window.addEventListener('load', main);

// //CANVAS
// let canvas = document.getElementById('gameArea');
// let ctx = canvas.getContext('2d');

// //images
// let bg = new Image();
// bg.src = '/bg.png';

// let item1 = new Image();
// item1.src = '/milk.png';

// //shelves heights
// let row1 = 20;
// let row2 = 120;
// let row3 = 190;
// let row4 = 260;
// let row5 = 330;

// //item variables
// let moveX = 3;

// let itemXRow1 = 1000;

// let items = [{
//     x: 1000,
//     y: row1
// }];

// //shopper variables
// let shopperX = 60;
// let shopperY = canvas.height - 70;

// //interval id for moving items
// let intervalId = setInterval(function () {
//     requestAnimationFrame(draw);
//     itemXRow1 -= moveX;
// }, 30)

// //draw item function
// function drawSquare(x, row) {
//     ctx.beginPath();
//     ctx.fillStyle = 'white';
//     ctx.fillRect(x, row, 40, 50);
//     ctx.closePath();
// }

// //draw shopper function
// function drawShopper() {
//     ctx.beginPath();
//     ctx.fillStyle = 'white';
//     ctx.fillRect(shopperX, shopperY, 150, 50)
// }

// //master draw function
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.drawImage(bg, 0, 0);

//     
//     // drawSquare(itemX, row2);
//     // drawSquare(itemX, row3);
//     // drawSquare(itemX, row4);
//     // drawSquare(itemX, row5);
//     drawShopper();
// }

// function getMousePosition(canvas, event) { 
//     let rect = canvas.getBoundingClientRect(); 
//     let x = event.clientX - rect.left; 
//     let y = event.clientY - rect.top; 
//     console.log("Coordinate x: " + x,  
//         "Coordinate y: " + y);
//     items.map(function (elem) {
//         if (x ) {

//         }
//     })
//     for (let i = 0; i < items.length; i++) {
//         if ((x > shopperX && x < shopperX + 150) && (items[i].x > shopperX && items[i].x < shopperX + 150)) {
//             ctx.clearRect(items[i].x, row1, 50, 150);
//             // ctx.drawImage(bg, 0, 0);
//         }
//     }
// }  

// //clicking
// canvas.addEventListener("mousedown", function (e) {
//     getMousePosition(canvas, e);
    
// });