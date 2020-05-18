class Item {
    constructor(canvas, xPosition, yPosition, imageSrc) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = 50;
        this.height = 80;
        this.x = xPosition;
        this.y = yPosition;
        this.speed = 3;
        this.itemImage = new Image();
        this.itemImage.src = imageSrc;
        this.intervalId = setInterval(function () {
            requestAnimationFrame(this.draw);
            this.x -= this.speed;
        }, 30);
    }
    draw() {
        this.ctx.drawImage(this.itemImage, this.x, this.y, this.width, this.height);
    }
    randomizeRow() {
        
    }
    updatePosition() {

    }
    
        

}