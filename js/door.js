class Door {
    constructor(ctx, x, y, width, height){ //canvasSize????
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        // Width y height y posición predefinida o con parametros para otros mapas??
    }

    draw() {
        this.ctx.fillStyle= "green"
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    // When player touches door, key appears
    playerCollition(player, key) {
        if (player.x < this.x + this.width &&
            player.x + player.width > this.x &&
            player.y < this.y + this.height) {
                key.visibility = true;
        }
    }



}
