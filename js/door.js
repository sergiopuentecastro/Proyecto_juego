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
    // Si ponemos puerta en otra posición, añadir condición que falta " && player.height + player.y > this.y"
    playerCollition() {
        if (player.x < this.x + this.width &&
            player.x + player.width > this.x &&
            player.y < this.y + this.height) {
                if (player.hasKey === false) {
                    key.visibility = true;
                } else {
                    // Esto debe llevar al siguiente nivel
                    alert ("YOU WIN JESÚS");
                }
        }
    }



}
