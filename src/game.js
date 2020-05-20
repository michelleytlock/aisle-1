class Game {
  constructor(inputName) {
    this.canvas = null;
    this.ctx = null;

    this.shopperX = 0;
    this.shopperY = 0;

    this.spawnLine = 1000; //newly spawned objects start here (x position)

    this.totalNumberOfItems = 14;

    this.items = [
      { name: "milk", source: "./img/milk.png" },
      { name: "cheese", source: "./img/cheese.png" },
      { name: "broccoli", source: "./img/broccoli.png" },
      { name: "chocolate-milk", source: "./img/chocolate-milk.png" },
      { name: "corn", source: "./img/corn.png" },
      { name: "jam", source: "./img/jam.png" },
      { name: "ketchup", source: "./img/ketchup.png" },
      { name: "lemon", source: "./img/lemon.png" },
      { name: "lettuce", source: "./img/lettuce.png" },
      { name: "orange-juice", source: "./img/orange-juice.png" },
      { name: "pear", source: "./img/pear.png" },
      { name: "sardines", source: "./img/sardines.png" },
      { name: "tomato", source: "./img/tomato.png" },
      { name: "yogurt", source: "./img/yogurt.png" },
    ];

    this.itemsRow0 = []; //array that holds all spawned objects in Row 1
    this.itemsRow1 = []; //array that holds all spawned objects in Row 2
    this.itemsRow2 = []; //array that holds all spawned objects in Row 3
    this.itemsRow3 = []; //array that holds all spawned objects in Row 4
    this.itemsRow4 = []; //array that holds all spawned objects in Row 5

    this.rows = [20, 110, 200, 290, 380]; //shelves heights (y positions)

    this.gameScreen = null;

    this.playerName = inputName;

    this.mouseX = 0;
    this.mouseY = 0;

    this.groceryList = [];

    this.score = 0;
  }

  start() {
    //create canvas
    this.canvasContainer = document.querySelector(".canvas-container");
    this.canvas = this.canvasContainer.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvasWidth = 1000;
    this.canvasHeight = 550;

    this.canvas.setAttribute("width", this.canvasWidth);
    this.canvas.setAttribute("height", this.canvasHeight);
  }
  //draw background, shopping cart, and items
  drawBg() {
    this.background = new Image();
    this.background.onload = () => {
      this.ctx.drawImage(this.background, 0, 0);
      this.drawShopper();
      this.drawItems();
    };
    this.background.src = "./img/bg.png";
  }

  //draw shopping cart
  drawShopper() {
    this.shopper = new Image();

    this.shopperX = -30;
    this.shopperY = this.canvas.height - 140;

    this.shopper.onload = () => {
      this.ctx.drawImage(this.shopper, this.shopperX, this.shopperY);
    };
    this.shopper.src = "./img/shoppingcart.png";
  }

  //create new items when previous item reaches certain x
  addNewItems(itemsRow, newItem) {
    let randomX = Math.floor(Math.random() * 1000);
    if (itemsRow.length && itemsRow[itemsRow.length - 1].x < randomX) {
      //if array has items and items
      itemsRow.push(newItem); //push new items into their respective rows
    } else if (!itemsRow.length) {
      itemsRow.push(newItem); //push new items into their respective rows
    }
  }

  //draw items
  drawItems() {
    //randomize type of item
    let t0 = Math.floor(Math.random() * this.items.length);
    let t1 = Math.floor(Math.random() * this.items.length);
    let t2 = Math.floor(Math.random() * this.items.length);
    let t3 = Math.floor(Math.random() * this.items.length);
    let t4 = Math.floor(Math.random() * this.items.length);

    //create new items and push into each row with randomized item type
    let newItem0 = new Item(
      this.canvas,
      this.items[t0].name,
      this.spawnLine,
      this.rows[0],
      this.items[t0].source
    );

    let newItem1 = new Item(
      this.canvas,
      this.items[t1].name,
      this.spawnLine,
      this.rows[1],
      this.items[t1].source
    );

    let newItem2 = new Item(
      this.canvas,
      this.items[t2].name,
      this.spawnLine,
      this.rows[2],
      this.items[t2].source
    );

    let newItem3 = new Item(
      this.canvas,
      this.items[t3].name,
      this.spawnLine,
      this.rows[3],
      this.items[t3].source
    );

    let newItem4 = new Item(
      this.canvas,
      this.items[t4].name,
      this.spawnLine,
      this.rows[4],
      this.items[t4].source
    );

    //check if previous item has reached a certain random x coordinate and add, push into array
    this.addNewItems(this.itemsRow0, newItem0);
    this.addNewItems(this.itemsRow1, newItem1);
    this.addNewItems(this.itemsRow2, newItem2);
    this.addNewItems(this.itemsRow3, newItem3);
    this.addNewItems(this.itemsRow4, newItem4);

    //draw the new items
    newItem0.draw();
    newItem1.draw();
    newItem2.draw();
    newItem3.draw();
    newItem4.draw();

    //draw all the items in each row
    this.itemsRow0.forEach((item) => {
      item.draw();
    });
    this.itemsRow1.forEach((item) => {
      item.draw();
    });
    this.itemsRow2.forEach((item) => {
      item.draw();
    });
    this.itemsRow3.forEach((item) => {
      item.draw();
    });
    this.itemsRow4.forEach((item) => {
      item.draw();
    });
  }

  //make items move their x positions
  moveItems() {
    this.itemsRow0.forEach((item) => {
      item.x -= item.speed; //distance item is moving every frame

      if (item.x + item.width < 0) {
        this.itemsRow0.shift(); //taking out items from array when gone
      }
    });

    this.itemsRow1.forEach((item) => {
      item.x -= item.speed;

      if (item.x + item.width < 0) {
        this.itemsRow1.shift();
      }
    });

    this.itemsRow2.forEach((item) => {
      item.x -= item.speed;

      if (item.x + item.width < 0) {
        this.itemsRow2.shift();
      }
    });

    this.itemsRow3.forEach((item) => {
      item.x -= item.speed;

      if (item.x + item.width < 0) {
        this.itemsRow3.shift();
      }
    });

    this.itemsRow4.forEach((item) => {
      item.x -= item.speed;

      if (item.x + item.width < 0) {
        this.itemsRow4.shift();
      }
    });
  }

  draw() {
    this.moveItems();
    this.drawBg();
    this.generateList();
    this.generateScore();
  }

  //draw everything within the interval after movement
  startAnimation() {
    setInterval(() => {
      window.requestAnimationFrame(() => {
        this.draw();
      });
    }, 30);
  }

  // get mouse coordinates
  getMousePosition(canvas, event) {
    this.rect = canvas.getBoundingClientRect();
    this.mouseX = event.clientX - this.rect.left;
    this.mouseY = event.clientY - this.rect.top;
    // console.log("Coordinate x: " + this.mouseX, "Coordinate y: " + this.mouseY);
  }

  //check mouse position with items
  checkItemPosition() {
    if (
      this.mouseX >= 45 &&
      this.mouseX <= 270 &&
      this.mouseY >= this.rows[0] &&
      this.mouseY <= this.rows[0] + 80
    ) {
      //check if mouse is in row 1
      this.itemsRow0.forEach((item, index) => {
        //loop through row
        if (
          item.x >= 45 &&
          item.x <= 270 &&
          this.mouseX >= item.x &&
          this.mouseX <= item.x + item.width &&
          this.mouseY >= item.y &&
          this.mouseY <= item.y + item.height
        ) {
          this.groceryList.forEach((groceryListItem, i) => {
            if (groceryListItem.name === item.name) {
              this.score++;
              this.itemsRow0.splice(index, 1);
              this.groceryList.splice(i, 1);
            }
          });
        }
      });
    };

    if (
      this.mouseX >= 45 &&
      this.mouseX <= 270 &&
      this.mouseY >= this.rows[1] &&
      this.mouseY <= this.rows[1] + 80
    ) {
      //check if mouse is in row 2
      this.itemsRow1.forEach((item, index) => {
        //loop through row
        if (
          item.x >= 45 &&
          item.x <= 270 &&
          this.mouseX >= item.x &&
          this.mouseX <= item.x + item.width &&
          this.mouseY >= item.y &&
          this.mouseY <= item.y + item.height
        ) {
          this.groceryList.forEach((groceryListItem, i) => {
            if (groceryListItem.name === item.name) {
              this.score++;
              this.itemsRow1.splice(index, 1);
              this.groceryList.splice(i, 1);
            }
          })
          
        }
      });
    }

    if (
      this.mouseX >= 45 &&
      this.mouseX <= 270 &&
      this.mouseY >= this.rows[2] &&
      this.mouseY <= this.rows[2] + 80
    ) {
      //check if mouse is in row 3
      this.itemsRow2.forEach((item, index) => {
        //loop through row
        if (
          item.x >= 45 &&
          item.x <= 270 &&
          this.mouseX >= item.x &&
          this.mouseX <= item.x + item.width &&
          this.mouseY >= item.y &&
          this.mouseY <= item.y + item.height
        ) {
          this.groceryList.forEach((groceryListItem, i) => {
            if (groceryListItem.name === item.name) {
              this.score++;
              this.itemsRow2.splice(index, 1);
              this.groceryList.splice(i, 1);
            }
          });
        }
      });
    }

    if (
      this.mouseX >= 45 &&
      this.mouseX <= 270 &&
      this.mouseY >= this.rows[3] &&
      this.mouseY <= this.rows[3] + 80
    ) {
      //check if mouse is in row 4
      this.itemsRow3.forEach((item, index) => {
        //loop through row
        if (
          item.x >= 45 &&
          item.x <= 270 &&
          this.mouseX >= item.x &&
          this.mouseX <= item.x + item.width &&
          this.mouseY >= item.y &&
          this.mouseY <= item.y + item.height
        ) {
          this.groceryList.forEach((groceryListItem, i) => {
            if (groceryListItem.name === item.name) {
              this.score++;
              this.itemsRow3.splice(index, 1);
              this.groceryList.splice(i, 1);
            }
          });
        }
      });
    }

    if (
      this.mouseX >= 45 &&
      this.mouseX <= 270 &&
      this.mouseY >= this.rows[4] &&
      this.mouseY <= this.rows[4] + 80
    ) {
      //check if mouse is in row 5
      this.itemsRow4.forEach((item, index) => {
        //loop through row
        if (
          item.x >= 45 &&
          item.x <= 270 &&
          this.mouseX >= item.x &&
          this.mouseX <= item.x + item.width &&
          this.mouseY >= item.y &&
          this.mouseY <= item.y + item.height
        ) {
          this.groceryList.forEach((groceryListItem, i) => {
            if (groceryListItem.name === item.name) {
              this.score++;
              this.itemsRow4.splice(index, 1);
              this.groceryList.splice(i, 1);
            }
          });
        }
      });
    }
  }

  //grocery list
  generateList() {
    let item1 = document.querySelector(".item1");
    let item2 = document.querySelector(".item2");
    let item3 = document.querySelector(".item3");
    let item4 = document.querySelector(".item4");
    let item5 = document.querySelector(".item5");

    if (this.groceryList.length < 5) {
      let randomIndex = Math.floor(Math.random() * this.items.length);

      if (!this.groceryList.includes(this.items[randomIndex])) {
        this.groceryList.push(this.items[randomIndex]);
      }
    }

    if (this.groceryList[0]) { item1.src = this.groceryList[0].source }
    if (this.groceryList[1]) { item2.src = this.groceryList[1].source }
    if (this.groceryList[2]) { item3.src = this.groceryList[2].source }
    if (this.groceryList[3]) { item4.src = this.groceryList[3].source }
    if (this.groceryList[4]) { item5.src = this.groceryList[4].source }
  }

  generateScore() {
    let scoreNum = document.querySelector(".score");

    scoreNum.innerHTML = this.score;
  }

}
