# Aisle 1

##Description
Aisle 1 is a game where the player has to move horizontally through a supermarket aisle and collect items from the shelves. The player wins if they collect everything on their grocery list. The player loses if they click on the wrong item.

<!---The player passes each level by collecting all the items on their grocery list before reaching the end of the aisle. Each game, the player has 3 lives. Lives will be taken away each time the player clicks on a wrong item. The game is over after the player has no more lives.-->

##MVP (DOM - CANVAS)
- game has player with shopping cart
- background with supermarket shelves moves horizontally towards the left
- clickable objects on shelves
- grocery list

##Backlog
- increasing difficulty levels
- add scoreboard
- 3 lives system
- bonus items for extra points
- animations
    - spinning animation of item being added to cart
    - player walking animation

##Data structure

#index.html

#main.js
- buildSplashScreen () {}
- buildGameScreen () {}
- buildEndGameScreen () {}
- buildGameOverScreen () {}

#game.js
- Game () {}
- drawCanvas () {}
- updateCanvas () {}
- clearCanvas () {}
- startLoop () {}
- gameOver () {}

#shopper.js
- draw () {}
- addEventListener () {}

#items.js
- draw () {}
- startLoop () {}
- checkCollision () {}

#groceryList.js
- drawCanvas () {}
- draw () {}
- checkOff () {}

##States y States Transitions
Definition of the different states and their transition (transition functions)
-splashScreen
-gameScreen
-gameOverScreen
-winScreen

##Task
- main - buildDOM
- main - buildSplashScreen
- main - buildGameScreen
- main - buildGameOverScreen
- main - buildWinScreen
- main - addEventListener
- game - drawCanvas
- game - updateCanvas
- game - clearCanvas
- game - startLoop
- shopper - draw
- shopper - addEventListener
- items - draw
- items - startLoop
- items - checkCollision
- groceryList - draw
- groceryList - checkOff
- game - gameOver

##Links

###Trello
[Link url](https://trello.com/b/Sq0xQB4e/aisle-1)

###Git
URIs for the project repo and deploy
[Link Repo](https://github.com/michelleytlock/aisle-1)

###Slides
URIs for the project presentation (slides)