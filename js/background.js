class Square {
    constructor(ctx, x, y, width = 50, height = 50) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.color = "black";
        this.x = x;
        this.y = y;
    }
    draw() {
        let ctx = game.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}