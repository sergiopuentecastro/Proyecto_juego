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
                    this.y -= this.speed
                    break;
                case this.keys.down:
                    this.y += this.speed
                    break;
                case this.keys.left:
                    this.x -= this.speed
                    break;
                case this.keys.right:
                    this.x += this.speed
                    break;
            }
        }
    }

    /* moveUp() {}
        this.positionY -= this.speed
        for (let i = 0; i < game.map.length; i++) {
            if (this.positionY == game.map[i])
        }

    */
    
    checkCollitions() {
        game.map.forEach(square => {
            console.log(square)
            if (this.y + this.height == square.y - square.height) {
                this.speed = 0;
            }
        });
    }


      // checkCollition(character) {
    //     if(((this.x > character.x)
    //         && this.x < character.x + character.width) 
    //         && ((this.y > character.y || this.y + this.height > character.y)
    //         && this.y < character.y + character.height)) {
    //       this.speedX *= -1
    //     }
    // }

}
