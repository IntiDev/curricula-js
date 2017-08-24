function Asiento(nombres,apellidos,dni){
  this.nombres=nombres;
  this.apellidos=apellidos;
  this.dni=dni;
}
/****************************************************************/

function Bus(){
  this.asientos=[];
  this.colorLibre = "#2EFE2E";//Color de asiento libre
  this.colorOcupado = "#006622";//Color de asiento libre
  this.colorSelec = "#f1ff59";//Color de asiento libre
  this.asientoSelec=-1; // asiento actual clickeado por el usuario
  this.n = 32; //numero de asientos del bus
  this.iniciar = function(){
    for (var i = 0; i <= this.n; i++) {
      this.asientos[i] = undefined;
    }
  };
/***************************************************/
  this.reservar = function (n,a,d) {
   if(this.asientoSelec == -1){
      alert("Seleccione asiento");
      return false;
   }
   else
   {
      this.asientos[this.asientoSelec-1]=new Asiento(n,a,d);
      alert("Registrado correctamente");
      return true;
   }
  };
/***************************************************/
  this.cancelar =function(){
   if(this.asientoSelec == -1){
      alert("Seleccione asiento");
      return false;
   }
   else
   {
      this.asientos[this.asientoSelec-1]=undefined;
      alert("Asiento cancelado");
      return true;
   }
  };
/***************************************************/
  this.buscar = function(dni){
    for(var i in this.asientos){
       if(this.asientos[i] != undefined && this.asientos[i].dni==dni){
          this.asientoSelec = parseInt(i)+1;
          document.getElementById(this.asientoSelec).style.backgroundColor=this.colorSelec;
          return this.asientos[i];
       }
    }
    return undefined;
  };
/***************************************************/
  this.listar = function(){
    var str = "";
    str += "<div class='list-group'>";
    for (var i in this.asientos) {
      if (this.asientos[i] != undefined) {
        var n = this.asientos[i].nombres;
        var a = this.asientos[i].apellidos;
        var d = this.asientos[i].dni;
        str += "<a class='list-group-item'>";
        str += "<h4 class='list-group-item-heading'>" + n + " " + a + "</h4>";
        str += "<p class='list-group-item-text'>DNI: " + d + "</p>";
        str += "<p class='list-group-item-text'>Asiento:" + (parseInt(i) + 1) + "</p>";
        str += "</a>";
      }
    }
    str += "</div>";
    return str;
  }; 
}
/*******************************************************************************************************/
var bus = new Bus();
bus.iniciar();


/***************************************************/
/*********************BUTTONS***********************/
/***************************************************/

var reserv = document.getElementById("reservar");
reserv.onclick = function(){
   var n=document.getElementById("nombres").value;
   var a=document.getElementById("apellidos").value;
   var d=document.getElementById("dni").value;
   var r = bus.reservar(n,a,d);
   if(r)
   {
      var td=document.getElementById(bus.asientoSelec);
      td.style.backgroundColor=bus.colorOcupado;
   }
   bus.asientoSelec=-1;
   limpiar();
};
function limpiar(){
     //document.getElementById("asiento").innerHTML="Seleccione un asiento";
     document.getElementById("nombres").value="";
     document.getElementById("apellidos").value="";
     document.getElementById("dni").value="";
     document.getElementById("buscarDni").value="";
     if(bus.asientoSelec != -1 && bus.asientos[bus.asientoSelec-1]==undefined)
        document.getElementById(bus.asientoSelec).style.backgroundColor=bus.colorLibre;
     else if(bus.asientos[bus.asientoSelec-1]!=undefined)
        document.getElementById(bus.asientoSelec).style.backgroundColor=bus.colorOcupado;
     document.getElementById("lista").innerHTML="";
};

var buscar = document.getElementById("buscar");
buscar.onclick = function(){
    var dni=document.getElementById("buscarDni").value;
    limpiar();
    var pasajero = bus.buscar(dni);
    document.getElementById("nombres").value = pasajero.nombres;
    document.getElementById("apellidos").value=pasajero.apellidos;
    document.getElementById("dni").value=pasajero.dni;
    if(pasajero == undefined)
      alert("No se encontró coincidencias.");
    
};


var celdas = document.getElementsByClassName('asiento');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
function redirect(event){
   limpiar();
   bus.asientoSelec = parseInt(event.target.textContent);
   event.target.style.backgroundColor=bus.colorSelec;
   if(bus.asientos[bus.asientoSelec-1] != undefined){
      var pasaj = bus.asientos[bus.asientoSelec-1];
      document.getElementById("nombres").value=pasaj.nombres;
      document.getElementById("apellidos").value=pasaj.apellidos;
      document.getElementById("dni").value=pasaj.dni;
   }
      //document.getElementById("asiento").innerHTML="Asiento seleccionado: "+asiento;
}

var listar = document.getElementById("listar");
listar.onclick = function(){
   limpiar();
   var lista = document.getElementById("lista");
   lista.innerHTML = bus.listar();
};

var cancel = document.getElementById("cancelar");
cancel.onclick = function(){
   var r = bus.cancelar();
   if(r)
   {
      var td=document.getElementById(bus.asientoSelec);
      td.style.backgroundColor=bus.colorLibre;
   }
   bus.asientoSelec=-1;
   limpiar();
};
