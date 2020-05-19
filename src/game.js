class Game {
  constructor(inputName) {
    this.canvas = null;
    this.ctx = null;

    this.spawnLine = 1000; //newly spawned objects start here (x position)

    this.totalNumberOfItems = 14;
    this.itemTypes = [
      "milk",
      "cheese",
      "broccoli",
      "chocolate-milk",
      "corn",
      "jam",
      "ketchup",
      "lemon",
      "lettuce",
      "orange-juice",
      "pear",
      "sardines",
      "tomato",
      "yogurt"
    ];
    this.itemSrcs = [
      "./img/milk.png",
      "./img/cheese.png",
      "./img/broccoli.png",
      "./img/chocolate-milk.png",
      "./img/corn.png",
      "./img/jam.png",
      "./img/ketchup.png",
      "./img/lemon.png",
      "./img/lettuce.png",
      "./img/orange-juice.png",
      "./img/pear.png",
      "./img/sardines.png",
      "./img/tomato.png",
      "./img/yogurt.png"
    ];

    this.itemsRow1 = []; //array that holds all spawned objects in Row 1
    this.itemsRow2 = []; //array that holds all spawned objects in Row 2
    this.itemsRow3 = []; //array that holds all spawned objects in Row 3
    this.itemsRow4 = []; //array that holds all spawned objects in Row 4
    this.itemsRow5 = []; //array that holds all spawned objects in Row 5

    this.rows = [20, 110, 200, 290, 380]; //shelves heights (y positions)

    this.gameScreen = null;

    this.playerName = inputName;
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
   
  addNewItems(items, newItem) { 
    if (items.length && items[items.length - 1].x < 600) {
      items.push(newItem);
    }
    else if (!items.length) {
      items.push(newItem);
     }
  }

  //draw items
  drawItems() {
    //randomize type of item
    let t0 = Math.floor(Math.random() * this.itemTypes.length);
    let t1 = Math.floor(Math.random() * this.itemTypes.length);
    let t2 = Math.floor(Math.random() * this.itemTypes.length);
    let t3 = Math.floor(Math.random() * this.itemTypes.length);
    let t4 = Math.floor(Math.random() * this.itemTypes.length);

    //create new items and push into each row with randomized item type
    let newItem0 = new Item(
      this.canvas,
      this.itemTypes[t0],
      this.spawnLine,
      this.rows[0],
      this.itemSrcs[t0]
    );

    let newItem1 = new Item(
      this.canvas,
      this.itemTypes[t1],
      this.spawnLine,
      this.rows[1],
      this.itemSrcs[t1]
    );

    let newItem2 = new Item(
      this.canvas,
      this.itemTypes[t2],
      this.spawnLine,
      this.rows[2],
      this.itemSrcs[t2]
    );

    let newItem3 = new Item(
      this.canvas,
      this.itemTypes[t3],
      this.spawnLine,
      this.rows[3],
      this.itemSrcs[t3]
    );

    let newItem4 = new Item(
      this.canvas,
      this.itemTypes[t4],
      this.spawnLine,
      this.rows[4],
      this.itemSrcs[t4]
    );

    //push new items into their respective rows
    //check if previous item has reached a certain random x coordinate
    
    this.addNewItems(this.itemsRow1, newItem0);
    this.itemsRow2.push(newItem1);
    this.itemsRow3.push(newItem2);
    this.itemsRow4.push(newItem3);
    this.itemsRow5.push(newItem4);

    //draw the new items
    newItem0.draw();
    newItem1.draw();
    newItem2.draw();
    newItem3.draw();
    newItem4.draw();

    //draw all the items in each row
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
    this.itemsRow5.forEach((item) => {
      item.draw();
    });
  }

  //make items move their x positions
  moveItems() {
    this.itemsRow1.forEach((item) => {
      item.x -= item.speed;

      if (item.x < 0) {
        this.itemsRow1.shift();
      }
    });

    this.itemsRow2.forEach((item) => {
      item.x -= item.speed;

      if (item.x < 0) {
        this.itemsRow2.shift();
      }
    });

    this.itemsRow3.forEach((item) => {
      item.x -= item.speed;

      if (item.x < 0) {
        this.itemsRow3.shift();
      }
    });

    this.itemsRow4.forEach((item) => {
      item.x -= item.speed;

      if (item.x < 0) {
        this.itemsRow4.shift();
      }
    });

    this.itemsRow5.forEach((item) => {
      item.x -= item.speed;

      if (item.x < 0) {
        this.itemsRow5.shift();
      }
    });
  }

  callEverything() { 
    this.moveItems();
    //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBg();
  }

  //draw everything within the interval after movement
  draw() {
    setInterval(() => {
      window.requestAnimationFrame(() => { this.callEverything() })
    }, 10);
  }

  // get mouse coordinates
  getMousePosition(canvas, event) {
    this.rect = canvas.getBoundingClientRect();
    this.x = event.clientX - this.rect.left;
    this.y = event.clientY - this.rect.top;
    console.log("Coordinate x: " + this.x, "Coordinate y: " + this.y);
  }
  
  // clicking functionality
  clicking() {
    
  }
}