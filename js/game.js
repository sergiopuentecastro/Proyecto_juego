const game = {
    canvas: null,
    ctx: null,
    canvasSize: {h: null, w: null},
    background: null,
    timeInterval: 20,
    borderTop: [],
    borderBottom: [],
    borderLeft: [],
    borderRight: [],
    verticalBars: [],
    map: [],
    
    // Meter obstáculos, personaje, balas, whatever
    // keys: {}
    init(id) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        // Medidias fijas o en función de la pantalla?
        this.canvasSize = {h: 600, w: 1000};
        this.createMap()
        this.concatMap()
        //console.log(this.map)
        this.drawMap()
        this.createAll()
        player.setListener()
        //player.checkCollitions()
        //this.setMap();
        this.start();
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.moveAll()
            this.drawMap()
            //player.checkCollitions()
        }, this.timeInterval);
    },

    clearAll() {
        this.ctx.clearRect(0,0, this.canvasSize.w, this.canvasSize.h)
    },

    createAll() {
        player = new Player(this.ctx, 60, 60, 30, 30)
        ghost1 = new Ghost(this.ctx, 50, 500, 20, 20)
        ghost2 = new Ghost(this.ctx, 920, 300, 20, 20)
    },

    drawAll() {
        player.draw()
        ghost1.draw()
        ghost2.draw()
    },

    moveAll() {
        ghost1.move()
        ghost2.move()
        ghost1.checkCollition()
        ghost2.checkCollition()
    },

    /* HECHO (SE PUEDE ACCEDER A LO ANTERIOR CON GIT):
    En todas estas funciones, cuando actualizamos con el setInterval
    sería mejor crear nuevas para solo dibujar el array en vez de recrearlo 
    en cada actualización??? */ 
    createMap() {
        /* Todas estas funciones se pueden meter en 
        la clase cuadrado o reducirlo de alguna manera fuera
        de game??? */
        this.createBordersTopBottom(20, 550, 50)
        this.createBordersLeftRight(10, 950, 50)
        this.createInteriorMap()
    },

    drawMap() {
        this.drawBordersTopBottom()
        this.drawBordersLeftRight()
        // Interior map:
        this.drawVerticalBars()
    },

    createInteriorMap() {
        this.createVerticalBars(8, 150, 50, 50)
        this.createVerticalBars(8, 300, 150, 50)
        this.createVerticalBars(8, 450, 50, 50)
        this.createVerticalBars(8, 600, 150, 50)
        this.createVerticalBars(8, 750, 50, 50)
    },

    // Join all squares in one array to iterate and create collisions
    concatMap() {
        this.map = this.map.concat(this.borderTop, this.borderBottom, 
                   this.borderLeft, this.borderRight, this.verticalBars);
    },

    createBordersTopBottom(squaresNum, space, squareSize) {
        /* Se podría sustituir squareSize por el tamaño de la clase?
        por ejemplo no poniendola fija en la clase si no metiéndolo
        como parámetro y poniéndolo aquí creando variable en game*/
        for (let i = 0; i < squaresNum; i++) {
            this.borderTop.push(new Square(this.ctx, [i * squareSize], 0));
            this.borderBottom.push(new Square(this.ctx, [i * squareSize], space));
        }
    },

    drawBordersTopBottom() {
        for (let i = 0; i < this.borderTop.length; i++) {
            this.borderTop[i].draw();
            this.borderBottom[i].draw();
        }
    },

    createBordersLeftRight(squaresNum, space, squareSize) {
        for (let i = 0; i < squaresNum; i++) {
            this.borderLeft.push(new Square(this.ctx, 0, [(i + 1) * squareSize]));
            this.borderRight.push(new Square(this.ctx, space, [(i + 1) * squareSize]));
        }
    },

    drawBordersLeftRight() {
        for (let i = 0; i < this.borderLeft.length; i++) {
            this.borderLeft[i].draw();
            this. borderRight[i].draw();
        }
    },

    createVerticalBars(squaresNum, x, y, squareSize) {
        for (let i = 0; i < squaresNum; i++) {
            this.verticalBars.push(new Square(this.ctx, x, y + squareSize * i));
        }
    },

    drawVerticalBars() {
        for (let i = 0; i < this.verticalBars.length; i++) {
            this.verticalBars[i].draw();
        }
    },

}
