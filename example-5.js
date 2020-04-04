import {cleanConsole, createAll} from './data';
import {fourthExerciseSolution} from './example-4';

const companies = createAll();

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', 'Put here your function');
// =================================================
// Método que permite dar solución al quinto ejercicio
// =================================================
function solutionFifthExercise(companies) {
  let totalAges = 0;
  let totalAgesUsersWhithCar = 0;
  const data = {size: 0, average: 0, hasCar: 0, averageWithCar: 0};
  const users = fourthExerciseSolution(companies);
  // users.forEach((user) => totalAges = totalAges + user.age); // se añade el total de la suma de las edades
  // se añade el total de la suma de las edades
  for (const user of users ) {
    totalAges += user.age;
    if (user.car) {
      totalAgesUsersWhithCar += user.age;
    }
  }
  data.size = users.length; // total de "users"
  data.average = Math.round(totalAges / data.size); // edad promedio redondeada;
  data.hasCar = users.filter((x) => x.car === true).length; // total de "users" propietarios de un carro
  data.averageWithCar = Math.round(totalAgesUsersWhithCar / data.hasCar);
  return data;
};
console.log('** SOLUCTION EXAMPLE 5: Data: ', solutionFifthExercise(companies));
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Use la función creada en el ejemplo 4 para crear una nueva función tomando
// como parámetro la variable "companies" y devuelve un nuevo objeto con los
// siguientes atributos:
//     'size' => total de "users"
//     'average' => edad promedio de "users"
//     'hasCar' => total de "users" propietarios de un carro
//     'averageWithCar' => edad promedio de los "users" con un carro

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Utiliser la fonction créée dans l'exemple 4 pour créer une
// nouvelle fonction prenant en paramètre la variable "companies" et renvoyant
// un nouvel objet avec les attributs suivants :
//     'size' => nombre de "users"
//     'average' => moyenne d'âge des "users"
//     'hasCar' => nombre de "users" possédant une voiture
//     'averageWithCar' => moyenne d'âge des "users" possédant une voiture
