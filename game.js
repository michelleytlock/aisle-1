class Game {
    constructor(inputName) {
        this.canvas = null;
        this.ctx = null;

        this.items = [];
        
        //shelves heights (y)
        this.row1 = 20;
        this.row2 = 60;
        this.row3 = 100;
        this.row4 = 140;
        this.row5 = 180;

        this.shopper = new Image();
        this.shopper.src = '';
        this.shopperX = 60;
        this.shopperY = this.canvas.height - 70;

        this.background = new Image();
        this.background.src = '/bg.png';

        this.gameScreen = null;
        this.playerName = inputName;
    }

    start() {
        //create canvas
        this.canvasContainer = document.querySelector('.canvas-container');
        this.canvas = this.canvasContainer.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        let containerWidth = 1000;
        let containerHeight = 550;

        this.canvas.setAttribute('width', containerWidth);
        this.canvas.setAttribute('height', containerHeight);
    }
    //draw shopper function
    drawShopper() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(this.shopperX, this.shopperY, 150, 50);
        this.closePath();
    }

    //main draw function with items, shopper background
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawShopper();
        this.ctx.drawImage(background, 0, 0);
        for (let i = 0; i < this.items.length; i++) {
            this.ctx.drawImage(this.items[i].itemImage, this.items[i].x, this.items[i].y);
            this.items[i].x -= 5;
            if (this.items[i].x == 850) {
                this.items.push(new Item());
                } 
            }
    }
    
    //get mouse coordinates
    getMousePosition(canvas, event) { 
        this.rect = canvas.getBoundingClientRect(); 
        this.x = event.clientX - rect.left; 
        this.y = event.clientY - rect.top; 
        console.log("Coordinate x: " + x,  
            "Coordinate y: " + y);
        
        for (let i = 0; i < items.length; i++) {
            if ((x > shopperX && x < shopperX + 150) && (items[i].x > shopperX && items[i].x < shopperX + 150)) {
                ctx.clearRect(items[i].x, row1, 50, 150);
                // ctx.drawImage(bg, 0, 0);
            }
        }
    } 
    this.canvas.addEventListener("mousedown", function (e) {
        getMousePosition(canvas, e);
        
    });

    startLoop() {
     
    }
}