const game = {
    canvas: null,
    ctx: null,
    canvasSize: {h: null, w: null},
    background: null,
    timeInterval: 20,
    map: [],
    // Meter obstáculos, personaje, balas, whatever
    // keys: {}
    init(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        // Medidias fijas o en función de la pantalla?
        this.canvasSize = {h: 600, w: 1000};
        this.createMap()
        
        player = new Player(this.ctx, 60, 60, 30, 30)
        player.draw()
        player.setListener()
        // player.draw()
        //this.setMap();
        this.start();
    },
    start() {
        setInterval(() => {
            this.clearAll()
            player.draw()
            this.createMap()
        }, this.timeInterval);
    },

    clearAll() {
        this.ctx.clearRect(0,0, this.canvasSize.w, this.canvasSize.h)
    },

    /* En todas estas funciones, cuando actualizamos con el setInterval
    sería mejor crear nuevas para solo dibujar el array en vez de recrearlo 
    en cada actualización??? */
    createMap() {
        /* Todas estas funciones se pueden meter en 
        la clase cuadrado o reducirlo de alguna manera fuera
        de game??? */
        this.bordersTopBottom(20, 550, 50)
        this.bordersLeftRight(10, 950, 50)
        this.interiorMap()
    },

    bordersTopBottom(squaresNum, space, squareSize) {
        /* Se podría sustituir squareSize por el tamaño de la clase?
        por ejemplo no poniendola fija en la clase si no metiéndolo
        como parámetro y poniéndolo aquí creando variable en game*/
        let borderTop = [];
        let borderBottom = [];
        for (let i = 0; i < squaresNum; i++) {
            borderTop.push(new Square(this.ctx, [i * squareSize], 0));
            borderTop[i].draw();
            borderBottom.push(new Square(this.ctx, [i * squareSize], space));
            borderBottom[i].draw();
        }
    },

    bordersLeftRight(squaresNum, space, squareSize) {
        let borderLeft = [];
        let borderRight = [];
        for (let i = 0; i < squaresNum; i++) {
            borderLeft.push(new Square(this.ctx, 0, [(i + 1) * squareSize]));
            borderLeft[i].draw();
            borderRight.push(new Square(this.ctx, space, [(i + 1) * squareSize]));
            borderRight[i].draw();
        }
    },

    verticalBar(squaresNum, x, y, squareSize) {
        let verticalBar = [];
        for (let i = 0; i < squaresNum; i++) {
            verticalBar.push(new Square(this.ctx, x, y + squareSize * i));
            verticalBar[i].draw();
        }
    },

    interiorMap() {
        this.verticalBar(8, 150, 50, 50)
        this.verticalBar(8, 300, 150, 50)
        this.verticalBar(8, 450, 50, 50)
        this.verticalBar(8, 600, 150, 50)
        this.verticalBar(8, 750, 50, 50)
    }

}
