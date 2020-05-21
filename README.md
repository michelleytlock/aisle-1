# Aisle 1

## Description
Aisle 1 is a game where the player is moving through a supermarket aisle and has to collect items from the shelves. The player wins if they collect as many things as possible in the allocated time. The player loses if they fail to collect any items before time's up.

<!---The player passes each level by collecting all the items on their grocery list before reaching the end of the aisle. Each game, the player has 3 lives. Lives will be taken away each time the player clicks on a wrong item. The game is over after the player has no more lives.-->

## MVP (DOM - CANVAS)
- game has player with shopping cart
- background with supermarket shelves moves horizontally towards the left
- clickable objects on shelves
- grocery list

## Backlog
- add scoreboard
- local storage
- increasing difficulty

## Data structure

# index.html

# main.js
- createSplashScreen () {}
- removeSplashScreen () {}
- createGameScreen () {}
- removeGameScreen () {}
- createGameOverScreen () {}
- removeGameOverScreen () {}
- startGame () {}
- gameOver () {}

# game.js
- Game () {}
- start () {}
- drawElements () {}
- drawShopper () {}
- drawItems () {}
- moveItems () {}
- draw () {}
- startTimer () {}
- startAnimation () {}
- getMousePosition () {}
- checkPositions () {}
- generateList () {}
- generateScore () {}
- updateScore () {}

# items.js
- Item () {}
- draw () {}

## States y States Transitions
Definition of the different states and their transition (transition functions)
- splashScreen
- gameScreen
- gameOverScreen

## Task
- main - buildDOM
- main - buildSplashScreen
- main - buildGameScreen
- main - buildGameOverScreen
- main - addEventListener
- main - startGame
- main - gameOver
- game - Game 
- game - start
- game - draw
- game - moveItems
- game - startTimer
- game - startAnimation
- game - getMousePosition
- game - checkPositions
- game - generateList
- game - generateScore
- items - Item
- items - draw

## Links

### Trello
[Link Url](https://trello.com/b/Sq0xQB4e/aisle-1)

### Git
URIs for the project repo and deploy
[Link Repo](https://github.com/michelleytlock/aisle-1)
[Link Deploy](https://michelleytlock.github.io/aisle-1/)

### Slides
[Link Slides](https://docs.google.com/presentation/d/1GkHE8UUCGrEzh9k2X6jW1y6jo9zjc56tNBPIM-3jwdY/edit?usp=sharing)