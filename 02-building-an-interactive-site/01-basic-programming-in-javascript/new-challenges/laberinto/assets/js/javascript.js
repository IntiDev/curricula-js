function Player (maze) {
    this.x = maze.startX;
    this.y = maze.startY;
    this.orientation = maze.startOrientation;
    this.maze = maze;

    this.turnLeft = function () {

    };
    this.turnRight  = function () {

    };
    this.moveForward = function () {

    };
    this.canMoveForward = function () {

    };
    this.exitMaze = function () {

    };
}

function Maze (matrix){
    this.width = null;
    this.height = null;
    this.startX = null;
    this.startY = null;
    this.endX = null;
    this.endY = null;
    this.startOrientation = null;

    this.matrix = matrix;
    this.width = matrix.length;
    this.height = matrix[0].length;

    this.isInBounds = function () {

    };
    this.isValidDirection = function () {

    };
    this.canMove= function () {

    };
}

function MazeInterface (player, maze) {
    this.player =  player;
    this.maze = maze;

    this.renderMaze = function () {
        let map = this.maze.matrix;
        let divElement = document.getElementById('table_container');
        let tableElement = document.createElement('table');
        for (let i = 0; i < map.length; i++) {
            let rowElement = document.createElement('tr');
            for (let j = 0; j < map[i].length; j++) {
                let cellElement = document.createElement('td');
                if (map[i][j] == "*") {
                    cellElement.setAttribute('class', 'block');
                } else if (map[i][j] == "_") {
                    cellElement.setAttribute('class', 'space')
                } else if (map[i][j] == "o") {
                    this.player.startX = i;
                    this.player.startY = j;
                    this.player.startOrientation = arrowKeyboard.UP;
                    cellElement.setAttribute('class', 'arrow_w');
                } else if (map[i][j] == "W") {
                    this.player.endX = i;
                    this.player.endY = j;
                    cellElement.setAttribute('class', 'final');
                }
                cellElement.setAttribute("id", i + "," + j);
                let div = document.createElement("div");
                div.setAttribute("class", "flechas");
                cellElement.appendChild(div);
                rowElement.appendChild(cellElement);
            }
            tableElement.appendChild(rowElement);
        }
        divElement.appendChild(tableElement);

    };

    this.resetEvent = function () {

    };

    this.moveEvent = function () {

    };

    this.rightEvent = function () {

    };

    this.leftEvent = function () {

    };
    document.getElementById("left").onclick = this.leftEvent;
    document.getElementById("right").onclick = this.rightEvent;
    document.getElementById("move").onclick = this.moveEvent;
    document.addEventListener("keydown", keydownEvent);

    //keycode de las arrowKeyboard
    const arrowKeyboard = {
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };

    function keydownEvent(e) {
        switch(e.keyCode) {
            case arrowKeyboard.UP:
                move(-1, 0, e.keyCode);
                break;
            case arrowKeyboard.DOWN:
                move(1, 0, e.keyCode);
                break;
            case arrowKeyboard.LEFT:
                move(0, -1, e.keyCode);
                break;
            case arrowKeyboard.RIGHT:
                move(0, 1, e.keyCode);
                break;
        }
    }

    function move (a, b, key) {

    }
}

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
let maze = new Maze(mazeMap) ;
let player = new Player(maze);
let interface = new MazeInterface (player, maze);
interface.renderMaze () ;