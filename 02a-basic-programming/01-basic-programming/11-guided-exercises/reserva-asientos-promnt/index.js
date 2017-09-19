
function mostrar(asientos){
   var str = " ";
   var filas =4;
   for (var j = 0; j < filas; j++) {
      for (var i = j; i < asientos.length; i+=4) {
         if (asientos[i] == undefined)
            str += (i+1) + "( " + ") ";
         else  
            str += (i+1) + "(*) ";
      }  
      if(j != (filas-1))
         str+="\n";
   }
   return "[" + str + "]\n";
} 

function reserva () {
   var N = 24; // Número de asientos
   var asientos = [];
   for (var i = 0; i < N; i++) {
      asientos[i] = undefined;
   }
   var mensaje = "0: Salir\n" +
                 "1: Reservar  asiento\n" +
                 "2: Liberar asiento \n" + 
                 "3: Buscar por DNI \n";
   
   var option = 0;
   while (true){
      var str = mostrar(asientos) + mensaje + " >> ingrese opcion:" ;
      option = parseInt( prompt( str )  );
      if (option == 0) {
         break;
      }else if (option == 1) {
         str = "Seleccione asiento:\n" + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >= 1 && nro <= N) {
            var name =  prompt( "Nombre del pasajero" )  ;
            var id = parseInt( prompt( "DNI del pasajero"  ) );
            asientos[nro - 1] = {
               nombre : name,
               dni: id
            };
         }
      }else if (option == 2) {
         str = "Seleccione asiento:\n" + mostrar(asientos);
         var nro = parseInt( prompt( str )  );
         if (nro >= 1 && nro <= N) {
            asientos[nro - 1] = undefined;
         }
       }else if (option == 3) {
         str = "Ingrese el dni a buscar: ";
         var dni = parseInt( prompt( str )  );
         for (var i = 0; i < N; i++) {
            if(asientos[i] != undefined && asientos[i].dni == dni){
               str = "Nombre del pasajero: " + asientos[i].nombre + 
               "\nDNI del pasajero: " + asientos[i].dni+
               "\nNumero de asiento: " + (i+1);
               alert (str);
               break;
            }
         }
      }
   } 
}

reserva();
