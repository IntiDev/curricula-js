/**
* You can use indexes in square brackets to set, change, or even add elements to an array. For example, to replace the first element in the dinosaurs array ("T-Rex") with "Tyrannosaurus Rex", you could do this:
* dinosaurs[0] = "Tyrannosaurus Rex";
* After you’ve done that, the dinosaurs array would look like this: ["Tyrannosaurus Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus"];
* You can also use square brackets with indexes to add new elementsto an array. For example, here’s how you could create the dinosaurs array by setting each element individually with square brackets:
* var dinosaurs = [];
* dinosaurs[0] = "T-Rex";
* dinosaurs[1] = "Velociraptor";
* dinosaurs[2] = "Stegosaurus";
* dinosaurs[3] = "Triceratops";
* dinosaurs[4] = "Brachiosaurus";
* dinosaurs[5] = "Pteranodon";
* dinosaurs[6] = "Apatosaurus";
* dinosaurs[7] = "Diplodocus";
* dinosaurs[8] = "Compsognathus";
* console.log(dinosaurs);
* ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus"];
* First we create an empty array with var dinosaurs = []. Then, with each following line we add a value to the list with a series of dinosaurs[] entries, from index 0 to index 8. Once we finish the list, we can view the array (by typing dinosaurs;). We see that JavaScript has stored all the names ordered according to the indexes.
* You can actually add an element at any index you want. For example, to add a new (made-up) dinosaur at index 33, you could write the following:
* dinosaurs[33] = "Philosoraptor";
* console.log(dinosaurs);
* ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus", undefined × 24 "Philosoraptor"]
* The elements between indexes 8 and 33 will be undefined. When you output the array, Chrome helpfully tells you how many elements were undefined, rather than listing them all individually
*/

// Crear un array vacío
var dinosaurs = [];

// Añadir elementos al array
dinosaurs[0] = "T-Rex";
dinosaurs[1] = "Velociraptor";
dinosaurs[2] = "Stegosaurus";
dinosaurs[3] = "Triceratops";
dinosaurs[4] = "Brachiosaurus";
dinosaurs[5] = "Pteranodon";
dinosaurs[6] = "Apatosaurus";
dinosaurs[7] = "Diplodocus";
dinosaurs[8] = "Compsognathus";

// Hacer un console.log de dinosaurs para ver los nuevos elementos
console.log(dinosaurs);

// Añadir un elemento en la posición 33 y mostrar qué pasa
dinosaurs[33] = "Philosoraptor";

// Hacer un console.log de dinosaurs para ver el nuevo elemento
console.log(dinosaurs);



