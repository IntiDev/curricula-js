'use strict';


const StyleEnum = {
    LEFT: "left",
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    EMPTY: "space",
    BLOCK: "block"
};

const mazeMap = [
    "******************",
    "*_________*______*",
    "*_*****_____******",
    "*______***__*__*_*",
    "***_*____*____**_*",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*__*****_**_*",
    "*o*__*________**W*",
    "******************"
];

var maze = {
    matrix: undefined, // representa el mapa del laberinto
    startX: undefined,  // posición x inicial del laberinto
    startY: undefined,  // posición y inicial del laberinto
    endX: undefined,  // posición x que representa la salida
    endY: undefined,// posición y que representa la salida
    startOrientation: undefined, // orientación inicial,

    init : function (matrix) {       
        this.matrix = matrix;
        this.width = matrix.length;
        this.height = matrix[0].length;
    },

    isWall : function (x, y) {
        return this.matrix[x][y] == "*";
    },
    isSpace: function (x, y) {
        return this.matrix[x][y] == "_";
    },
    isEnd: function (x, y) {
        return x == this.endX && y == this.endY;
    },
    isInBounds: function (x, y) {
        return x > 0 && x <= this.width && y > 0 && y <= this.height;
    },
};

var player  = {
    x: undefined, // posición x actual del jugador
    y: undefined, // posición x actual del jugador
    orientation: undefined, // orientación actual del jugador,
    interface: undefined,
    maze : undefined,
    domElements : [],
    init: function (maze, mazeInterface) {
        this.maze = maze;
        this.interface = mazeInterface;
    },
    turnLeft: function () {
        const lefts = {
            up: "left",
            right: "up",
            down: "right",
            left: "down"
        };
        this.orientation = lefts[this.orientation];
        this.interface.setStyleAt(this.x, this.y, this.orientation);
    }, 
    turnRight: function() {
        const rights = {
            up: "right",
            right: "down",
            down: "left",
            left: "up"
        };
        this.orientation = rights[this.orientation];
        this.interface.setStyleAt(this.x, this.y, this.orientation);
    },
    move: function () {
        switch(this.orientation) {
            case "left": // left
                this.moveForward(0, -1, StyleEnum.LEFT);
                break;
            case "up": // up
                this.moveForward(-1, 0, StyleEnum.UP);
                break;
            case "right": // right
                this.moveForward(0, 1, StyleEnum.RIGHT);
                break;
            case "down": // down
                this.moveForward(1, 0, StyleEnum.DOWN);
                break;
        }
    },
    moveForward: function (a, b, direction) {
        if (!this.maze.isInBounds(this.x + a, this.y + b)) {
            // break the app!
            return;
        }

        const map = this.maze.matrix;
        if( this.maze.isWall (this.x + a, this.y + b) ){
            // stop !

        }
        else if ( this.maze.isSpace (this.x + a, this.y + b) ){
            this.interface.setStyleAt(this.x, this.y, StyleEnum.EMPTY);
            this.x = this.x + a;
            this.y = this.y + b;
            this.interface.setStyleAt(this.x, this.y, direction);
        }

        else if(  this.maze.isEnd (this.x + a, this.y + b) ){
            this.interface.setStyleAt(this.x, this.y, StyleEnum.EMPTY);
            this.x = this.x + a;
            this.y = this.y + b;
            alert("Ganaste...!");
        }
    },

    exitMaze: function() {
        let timer = setInterval( () => {
            let px = this.x;
            let py = this.y;

            this.turnLeft();
            this.move();

            if (this.x == px && this.y == py) {
                this.turnRight();
                this.move();
            }
            if (this.x == px && this.y == py) {
                this.turnRight();
                this.move();
            }
            if (this.maze.isEnd(this.x, this.y)) {
                clearInterval(timer);
            }
        }, 200);


    }
};  

var mazeInterface = {

    init : function (player, maze){
        this.player =  player;
        this.maze = maze;
        this.domMatrix = [];
        $("#start").on("click", () => {
            this.renderMaze();
        });

        document.getElementById("start").onclick = () => {
            this.renderMaze();
        };
        document.getElementById("left").onclick = () => {
             this.player.turnLeft();
        };
        document.getElementById("right").onclick = () => {
             this.player.turnRight();
        };
        document.getElementById("move").onclick = () => {
             this.player.moveForward();
        };
        document.getElementById("exit").onclick = () => {
             this.player.exitMaze();
        };

        $(document).on("keydown", (e) => {
            switch(e.keyCode) {
                case 37: // left
                    this.moveForward(0, -1, StyleEnum.LEFT);
                    break;
                case 38: // up
                    this.moveForward(-1, 0, StyleEnum.UP);
                    break;
                case 39: // right
                    this.moveForward(0, 1, StyleEnum.RIGHT);
                    break;
                case 40: // down
                    this.moveForward(1, 0, StyleEnum.DOWN);
                    break;
            }
        });
    },

    moveForward: function (a, b, direction) {
        this.player.moveForward(a, b, direction);
    },

    setStyleAt: function (x, y, style) {
        let cellElement = this.domMatrix[x][y];
        cellElement.setAttribute('class', style);
    },

    renderMaze: function () {
        let map = this.maze.matrix;
        let divElement = $('#table_container');
        divElement.html('');
        let tableElement = document.createElement('table');

        this.domMatrix = [];
        for (let i = 0; i < map.length; i++) {
            let rowElement = document.createElement('tr');
            this.domMatrix[i] = [];
            for (let j = 0; j < map[i].length; j++) {
                let cellElement = document.createElement('td');
                if (map[i][j] == "*") {
                    cellElement.setAttribute('class', 'block');
                } else if (map[i][j] == "_") {
                    cellElement.setAttribute('class', 'space')
                } else if (map[i][j] == "o") {
                    this.maze.startX = i;
                    this.maze.startY = j;
                    this.player.x = i;
                    this.player.y = j;
                    this.player.orientation = StyleEnum.UP;
                    this.maze.startOrientation = StyleEnum.UP;
                    cellElement.setAttribute('class', StyleEnum.UP);
                } else if (map[i][j] == "W") {
                    this.maze.endX = i;
                    this.maze.endY = j;
                    cellElement.setAttribute('class', 'final');
                }
                rowElement.appendChild(cellElement);
                this.domMatrix[i][j] = cellElement;
            }
            tableElement.appendChild(rowElement);
        }
        divElement.append(tableElement);
    }
}

maze.init(mazeMap) ;
player.init (maze, mazeInterface);
 mazeInterface.init (player, maze);
mazeInterface.renderMaze () ;
