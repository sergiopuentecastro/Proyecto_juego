const game = {
    canvas: null,
    ctx: null,
    canvasSize: {h: null, w: null},
    background: null,
    // Meter obstáculos, personaje, balas, whatever
    // keys: {}
    init(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        //this.width = 1000;
        //this.height = 600;
        console.log('entro en init')
        square1 = new Square(this.ctx, 0, 0);
        //this.setMap();
        //this.start();
    },
    //start()
    setMap() {
        console.log('entro en setMap')
        square1 = new Square(this.ctx, 0, 0);
    }
}
