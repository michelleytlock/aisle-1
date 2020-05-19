class Item {
    constructor(canvas, name, xPosition, yPosition, imageSrc) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = 50;
        this.height = 80;
        this.x = xPosition;
        this.y = yPosition;
        this.speed = 50;
        this.name = name;
        this.itemImage = new Image();
        this.itemImage.src = imageSrc;
    }
    draw() {
        this.ctx.drawImage(this.itemImage, this.x, this.y);
        
        
    }
    
    
}