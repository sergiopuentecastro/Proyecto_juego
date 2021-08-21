class Player{
    constructor(ctx, x, y, width, height){ //canvasSize????
        this.ctx = ctx
        this.positionX = x
        this.positionY = y
        this.width = width
        this.height = height
        this.size = {h: height, w: width}
        this.keys = {
            up: 'ArrowUp',
            down: 'ArrowDown',
            left: 'ArrowLeft',
            right: 'ArrowRight'
        }
        this.speed = 10
    }

    draw() {
        this.ctx.fillStyle= "red"
        this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height)
    }

    setListener() {
        document.onkeydown = e => {
            
            switch (e.key){
                //Hacer una función para cada movimiento?? moveUp()....
                case this.keys.up:
                    this.positionY -= this.speed
                    break;
                case this.keys.down:
                    this.positionY += this.speed
                    break;
                case this.keys.left:
                    this.positionX -= this.speed
                    break;
                case this.keys.right:
                    this.positionX += this.speed
                    break;
            }
        }
    }

    // move() {}
    
}