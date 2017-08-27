function isWall (maze, x, y) // preguntar si (x,y) representa un muro, es decir  '*'
{
    return maze.matrix[x][y] == "*";
}
function isSpace (maze, x, y) // preguntar si (x,y) representa un espacio vacio, es decir  '_'
{
    return maze.matrix[x][y] == "_";
}
function isEnd (maze, x, y) // preguntar si (x,y) representa la salida del laberinto, es decir 'W'
{
    return x == maze.endX && y == maze.endY;
}

function turnLeft (player)  //  rotar a la izquierda
{
    const lefts = {
        up: "left",
        right: "up",
        down: "right",
        left: "down"
    };
    player.orientation = lefts[player.orientation];
    setStyleAt(player.domElements, player.x, player.y, player.orientation);
}

function turnRight (player) //  rotar a la derecha
{
    const rights = {
        up: "right",
        right: "down",
        down: "left",
        left: "up"
    };
    player.orientation = rights[player.orientation];
    setStyleAt(player.domElements,  player.x, player.y, player.orientation);
}
function moveForward(player)  //  mover una posición hacia adelante en la dirección de player.direction
{
    switch(player.orientation) {
        case "left": // left
            move(player, 0, -1, StyleEnum.LEFT);
            break;
        case "up": // up
            move(player, -1, 0, StyleEnum.UP);
            break;
        case "right": // right
            move(player, 0, 1, StyleEnum.RIGHT);
            break;
        case "down": // down
            move(player, 1, 0, StyleEnum.DOWN);
            break;
    }
}
function move (player, a, b, direction) {
    const map = player.maze.matrix;
    if( isWall (player.maze, player.x + a, player.y + b) ){
        // stop !

    }
    else if ( isSpace (player.maze, player.x + a, player.y + b) ){
        setStyleAt(player.domElements, player.x, player.y, StyleEnum.EMPTY);
        player.x = player.x + a;
        player.y = player.y + b;
         setStyleAt(player.domElements, player.x, player.y, direction);
    }

    else if(  isEnd (player.maze, player.x + a, player.y + b) ){
         setStyleAt(player.domElements, player.x, player.y, StyleEnum.EMPTY);
        player.x = player.x + a;
        player.y = player.y + b;
        alert("Ganaste...!");
    }
}


function exitMaze (player) // Algoritmo de búsqueda para encontrar un camino de salida para un laberinto cualquiera
{
    let timer = setInterval( () => {
        let px = player.x;
        let py = player.y;

        turnLeft(player);
        moveForward(player);

        if (player.x == px && player.y == py) {
            turnRight(player);
            moveForward(player);
        }
        if (player.x == px && player.y == py) {
            turnRight(player);
            moveForward(player);
        }
        if (isEnd(player.maze, player.x, player.y)) {
            clearInterval(timer);
        }
    }, 200);
}

function renderMaze (player) // dibujar laberinto
{
    let map = player.maze.matrix;
    let divElement = document.getElementById('table_container');
    divElement.innerHTML = '';
    let tableElement = document.createElement('table');

    player.domElements = [];
    for (let i = 0; i < map.length; i++) {
        let rowElement = document.createElement('tr');
        player.domElements[i] = [];
        for (let j = 0; j < map[i].length; j++) {
            let cellElement = document.createElement('td');
            if (map[i][j] == "*") {
                cellElement.setAttribute('class', 'block');
            } else if (map[i][j] == "_") {
                cellElement.setAttribute('class', 'space')
            } else if (map[i][j] == "o") {
                player.maze.startX = i;
                player.maze.startY = j;
                player.x = i;
                player.y = j;
                player.orientation = StyleEnum.UP;
                player.maze.startOrientation = StyleEnum.UP;
                cellElement.setAttribute('class', StyleEnum.UP);
            } else if (map[i][j] == "W") {
                player.maze.endX = i;
                player.maze.endY = j;
                cellElement.setAttribute('class', 'final');
            }
            rowElement.appendChild(cellElement);
            player.domElements[i][j] = cellElement;
        }
        tableElement.appendChild(rowElement);
    }
    divElement.appendChild(tableElement);
}

function setStyleAt (domElements, x, y, style) // establecer estilo en la posición x, y
{
    let cellElement = domElements[x][y];
    cellElement.setAttribute('class', style);
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

const StyleEnum = {
    LEFT: "left",
    UP: "up",
    RIGHT: "right",
    DOWN: "down",
    EMPTY: "space",
    BLOCK: "block"
};


var maze = {
    matrix: mazeMap, // representa el mapa del laberinto
    startX: undefined,  // posición x inicial del laberinto
    startY: undefined,  // posición y inicial del laberinto
    endX: undefined,  // posición x que representa la salida
    endY: undefined,// posición y que representa la salida
    startOrientation: undefined // orientación inicial
};

var player  = {
    x: undefined, // posición x actual del jugador
    y: undefined, // posición x actual del jugador
    orientation: undefined, // orientación actual del jugador,
    maze : maze,
    domElements : []
};

renderMaze (player) ;

document.getElementById("start").onclick = () => {
    renderMaze(player);
};
document.getElementById("left").onclick = () => {
    turnLeft(player);
};
document.getElementById("right").onclick = () => {
    turnRight(player);
};
document.getElementById("move").onclick = () => {
    moveForward(player);
};
document.getElementById("exit").onclick = () => {
    exitMaze(player);
};