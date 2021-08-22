class Player{
    constructor(ctx, x, y, width, height){ //canvasSize????
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.size = {h: height, w: width};
        this.keys = {
            up: 'ArrowUp',
            down: 'ArrowDown',
            left: 'ArrowLeft',
            right: 'ArrowRight'
        };
        this.speed = 10;
    }

    draw() {
        this.ctx.fillStyle= "red"
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    setListener() {
        document.onkeydown = e => {
            
            switch (e.key){
                //Hacer una función para cada movimiento?? moveUp()....
                case this.keys.up:
                    this.moveUp();
                    break;
                case this.keys.down:
                    this.moveDown();
                    break;
                case this.keys.left:
                    this.moveLeft();
                    break;
                case this.keys.right:
                    this.moveRight();
                    break;
            }
        }
    }

    // En las siguientes funciones, 50 es el tamaño de la clase cuadrado, cómo ponerlo sin número?

    // Outer edges collitions (top, bottom, left, right)
    moveUp() {
        if (this.y > 50) {
            this.y -= this.speed;
        }
    }

    moveDown() {
        if (this.y + this.width < game.canvasSize.h - 50) {
            this.y += this.speed;
        }
    }

    moveLeft() {
        if (this.x > 50) {
            this.x -= this.speed;
        }
    }
       
    moveRight() {
        if (this.x + this.width < game.canvasSize.w - 50) {
            this.x += this.speed;
        }
    }

    



    // Collision attempts with all squares

    left() {
        return this.x;
    }

    right() {
        return this.x + this.width;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.height;
    }
    
    checkCollitions() {
        if (this.x >= 920) {

            this.x = 920
            
        }


    }

        /*
        game.map.forEach(square => {
            //console.log(square)
            if (this.x > 950 && this.y <= 600) {
                console.log('toco!!') 
         */                
                /*&&
                (this.bottom() == square.top()) {
                console.log('toco!!')                
                this.top() > square.bottom() &&
                this.right() < square.left() &&
                this.left() > square.right()) {
                this.speed = 0;
                
            }
            
        });*/
    

        /*
        crashWith(obstacle) {
        return !(
          this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() ||
          this.right() < obstacle.left() ||
          this.left() > obstacle.right()
        );
        */

        /*
        (this.x < square.x + square.width &&
        this.x + this.width > square.width &&
        this.y < square.width + square.height &&
        this.y + this.height > square.y) {


        (square.x < this.x + this.width &&
        square.x + square.width > this.width &&
        square.y < this.width + this.height &&
        square.y + square.height > this.y) {
        */

}
