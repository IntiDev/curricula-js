var tablero = document.getElementById('tablero');
var right = document.getElementById('right');
var left = document.getElementById('left');
var move = document.getElementById('move');
var play = document.getElementById('play');
var complete = document.getElementById('complete')

var map1 = [" * * * * * * * * * * * * * * * * * * * * ",
    " * *           * * *             * *   * ",
    " * *             W                 *   * ",
    " *                           *     *   * ",
    " *         *                       *   * ",
    " *   * * * *             *         *   * ",
    " *     *     * *       *   *       *   * ",
    " *   * I o   * *         *   * * * *   * ",
    " *     *     * *   * *  **           I * ",
    " *   *          *        *         * * * ",
    " *           * ***   *   *     *   * * * ",
    " *       *      *        * *       * * * ",
    " *     * *             ***         * * * ",
    " * *   *           *     *         *   * ",
    " *     *   *      *      *     *       * ",
    " * *        *     *      *         *   * ",
    " * * * * * * * * * * * * * * * * * * * * "];

var  map2=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * *                                 *             * * * * ",
    " * *   *                             *       *       * * * ",
    " *   *   *            *              *     * *     *     * ",
    " *         *           * *           * * *       *   *   * ",
    " *     * *       *           *       *   *     *     *   * ",
    " *   *                       *       *   *   *       *   * ",
    " * *                             *   *   I          W* * * ",
    " * *              **     * *                             * ",
    " * *             *     I           *                     * ",
    " *               *   *         *                     *   * ",
    " *   *   *     *       *   *                             * ",
    " *     *                             *                   * ",
    " *       * *        *    *   *     * * *           *     * ",
    " *       * *                         *     *       *     * ",
    " * *             *       *       *                       * ",
    " *       *     *       *   * *     *     *   * *         * ",
    " *     *           *  o*   * *   *   *       * * *       * ",
    " * * *      *          * *         *   *             * * * ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map3=[" * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ",
    " * * * * * * * * * * *                                           ",
    " *       *  *  *       * *                                W*     ",
    " *               *     * * *           *                   I     ",
    " * *       *               * *                                   ",
    " *    *    * *   I           * *         *   *                   ",
    " *                   ****      * * * *   *     *         *       ",
    " *         *                 *           *   *                   ",
    " *       *                 *   *                                 ",
    " *         *   *         *       *   *                           ",
    " *             *         *                                       ",
    " * *                ** *                                   *     ",
    " *                **         * *                                 ",
    " *  **   *   *  **                     * *                 * *   ",
    " * *   *   *   *       * *                   * *           * *   ",
    " *                                         *   *                 ",
    " *               *     *               ***   * *                 ",
    " *             *               *                                 ",
    " *                       *         * *                           ",
    " *o  *       *           *       * *                           * ",
    " * * *           *                                         *     ",
    " * * * *                                  *                *     ",
    " * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * "];

var map4= ["                                                                 ",
    " *   o       * **  ** *                                  *****    ",
    "    *                                                        *    ",
    "    *           **                                           *    ",
    "   ** **************         **             ****             *    ",
    "   **          *           * *                              I*  * ",
    "   **                                        *                    ",
    "   *****************                         ****                 ",
    "       *************                                              ",
    "     ***************   *   W                                      ",
    "            ** **      **  **                                     ",
    "                      *    **                                     ",
    "  *                  *******                                      ",
    "   *****            **                                      W     ",
    "   ***        **  **          *                            ***    ",
    " **************************************************************** ",
    "   I  **       *           * *                             ***    ",
    " *            *                    ** * * * *       *      ***    ",
    "               *        *                           *       *     ",
    "    *                  ** *                         *    W        ",
    " *  **                  *           *             *               ",
    " *  ****                   *                 *    *          ***  ",
    " *  *******                *                ****  **              ",
    " *  ****                  **                ***   ****            ",
    " *  ***       *         W                   *****     *******     ",
    " **  *        **    *                        ***  ***********     ",
    " **    **                                    ****************     ",
    " **     ** *****       *  *****                 **                ",
    "           *    * ** **    ****                   *               ",
    " ** W****************    * ****                    *      ******* ",
    "                                                                  "];

var map5= ["                                                                 ",
    "                                W                     W          ",
    "         *                                       *               ",
    "   *                    *                            *           ",
    "                                              *                  ",
    "                                                  *        *     ",
    "   *                         W            *         *            ",
    "          *                                    *            *    ",
    "                                      *                      *   ",
    "                                           *                  I  ",
    "         *                             *                       W ",
    "  *            *       *                                         ",
    "                                                                 ",
    "                                                   *             ",
    "    *               **W*************W********             *      ",
    "          *         *                       *                    ",
    "                    *   ******W**********   *                  * ",
    "                    *   *               *   *       *            ",
    "                    *   *   **********  *   W                    ",
    "                    *   W   *        *  *   *                    ",
    "         *          *   *   *        I  *   *                    ",
    "   *                *   *   ******** *  *   *    W               ",
    "                    *   *            *  W   *        *           ",
    "                    *   **************  *   W               ***  ",
    "          *         *                   *   *               **   ",
    "     *              *********************   *        *           ",
    "          *                                 *        *        W  ",
    "  *                                         *        *        *  ",
    "      *       ***W*********W****W****W*******        *******  *  ",
    " o *                                                             ",
    "                                                                 "] ;


var map6=[  "                                                 ",
    "                                                 ",
    "                                                 ",
    "       **o        ***                **W         ",
    "                  ***                 *          ",
    "                  *              *               ",
    "                  *                     *        ",
    "     *  *                     *   *     *        ",
    "      * *                    **** *              ",
    "      *                                 *        ",
    "                                       **        ",
    "                         **            **        ",
    "                          *                      ",
    "              ** *       ***                     ",
    "              ***                                ",
    "              **                  **             ",
    "       **                         **             ",
    "       **                         *              ",
    "         *            **                         ",
    "                     ***                         ",
    "                    * **                         ",
    "                                                 ",
    "                                                 "];

var mapas = [  map1, map2, map3, map4, map5, map6];
var mapa = mapas[0];



var directions = ['flechas/left.png',"flechas/up.png","flechas/right.png","flechas/down.png"]

var arrayMapa = [];
for (var i = 0; i < mapa.length; i++) {
  for (var j = 0; j < mapa[i].length; j++) {
    var M= mapa[i].split("");
  }
  arrayMapa.push(M);
}

var n = mapa.length;
var m = mapa[0].length;

var tabla = document.createElement('table');
tabla.border = "1";
for (var i = 0; i < n; i++) {
  var fila = document.createElement('tr');
  for (var j = 0; j < m; j++) {
    var celda = document.createElement('td');
    if (mapa[i][j] == "*") {
      celda.setAttribute('class', 'block');
    }else if(mapa[i][j] == "o") {
      celda.setAttribute('class','init')
      var x = i;
      var y = j;
    }else if(mapa[i][j] == "W") {
      celda.setAttribute('class','final')
    }else{
      celda.setAttribute('class','space');
    }
    fila.appendChild(celda);
    arrayMapa[i][j] = celda;
  }
  tabla.appendChild(fila);
}
tablero.appendChild(tabla);


var click = 0;

left.onclick = function () {

  if (click<= 0){
    click = 4;
  }
  arrayMapa[x][y].style.backgroundImage = "url("+directions[click-1]+")";
  click = click - 1;
  console.log(click);
}

right.onclick = function () {

  if (click >= 3){
    click = -1;
  }
  arrayMapa[x][y].style.backgroundImage = "url("+directions[click+1]+")";
  click = click + 1;

  console.log(click);
}
var t;
function mover(a,b,direccion){

    if( mapa[x+a][y+b]=="*" ){
      clearTimeout(t);
      return;
    }
    if (mapa[x+a][y+b]==" " || mapa[x+a][y+b]=="W"){
      arrayMapa[x+a][y+b].style.backgroundImage = "url("+directions[direccion]+")";
      arrayMapa[x][y].style.backgroundImage = "url(flechas/point.png)";
      init.style.backgroundImage = "url(flechas/init1.png)";
      finit.style.backgroundImage = "url(flechas/init.png)";

      if( mapa[x+a][y+b]=="W" ){
        alert("Ganaste...!");
        return;
      }
      x=x+a;
      y=y+b;
    }
    t = setTimeout(function(){ mover(a, b, direccion) }, 250);
}

var init = document.getElementsByClassName("init")[0]
var finit = document.getElementsByClassName("final")[0]
move.onclick = function () {
  if (click == 1)
    mover(-1,0,click);
  if (click == 2)
    mover(0,1,click);
  if (click == 3)
    mover(1,0,click);
  if (click == 0)
    mover(0,-1,click);
}

function completo(){
  px=x;
  py=y;
  right.click();
  move.click();
  if(x==px && y==py){
    left.click();
    move.click();
  }
  if(x==px && y==py){
    left.click();
    move.click();
  }
  if(x==px && y==py){
    left.click();
    move.click();
  }
  if( mapa[x][y]=="W" ){
    clearInterval(parar);
  }
}

var parar;
complete.onclick = function(){
  parar= setInterval(completo,100);
}



//keycode de las teclas
var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

//evento
document.addEventListener("keydown", movimiento);



//variables constantes
const izquierda=0;
const derecha=2;
const arriba=1;
const abajo=3;

function movimiento(evento)
{
  switch(evento.keyCode)
      {
    case teclas.UP:
      mover(-1, 0, arriba);
      break;
    case teclas.DOWN:
      mover(1, 0, abajo);
      break;
    case teclas.LEFT:
      mover(0, -1, izquierda);
      break;
    case teclas.RIGHT:
      mover(0, 1, derecha);
      break;
  }
}

