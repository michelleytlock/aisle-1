class Game {
    constructor() {
        this.canvas = null;
        this.ctx = null;

        this.items = [];
        
        //shelves heights (y)
        this.rows = [20, 110, 200, 290, 380];
        this.randomRow = this.rows[Math.floor(Math.random() * this.rows.length)];
        
        this.gameScreen = null;

        // this.playerName = inputName;
    }

    start() {
        //create canvas
        this.canvasContainer = document.querySelector('.canvas-container');
        this.canvas = this.canvasContainer.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.canvasWidth = 1000;
        this.canvasHeight = 550;

        this.canvas.setAttribute('width', this.canvasWidth);
        this.canvas.setAttribute('height', this.canvasHeight);

    }
    //draw background
    drawBg() {
        this.background = new Image();
        this.background.onload = () => { this.ctx.drawImage(this.background, 0, 0) };
        this.background.src = './img/bg.png';
    }

    //draw shopping cart
    drawShopper() {
        this.shopper = new Image();
    
        this.shopperX = -30;
        this.shopperY = this.canvas.height - 140;

        this.shopper.onload = () => { this.ctx.drawImage(this.shopper, this.shopperX, this.shopperY) };
        this.shopper.src = './img/shoppingcart.png';
    }

    //draw items
    drawItems() {
        this.items.push(new Item(this.canvas, 'milk', 800, this.randomRow, './img/milk.png'));
        this.items[0].itemImage.onload = () => { this.ctx.drawImage(this.items[0].itemImage, this.items[0].x, this.items[0].y)};
    }

    //draw everything
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBg();
        this.drawShopper();
        this.drawItems();
        
        // for (let i = 0; i < this.items.length; i++) {
        //     this.ctx.drawImage(this.items[i].itemImage, this.items[i].x, this.items[i].y);
        //     this.items[i].x -= 5;
        //     if (this.items[i].x == 850) {
        //         this.items.push(new Item());
        //         } 
        //     }
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
        this.canvas.addEventListener("mousedown", function (e) {
            getMousePosition(canvas, e);
            
        });
    } 
}