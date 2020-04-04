import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(2, companies);
console.log('---- EXAMPLE 2 --- ', 'Put here your function');
// =================================================
// Método que permite dar solución  al segundo  ejercicio
// =================================================
function secondExerciseSolution(companies, hasCar) {
  let usersWithCar;
  const newCompanies = Object.assign([], companies); // se quita la fererencia del objecto.
  for (const company of newCompanies) {
    // Se filtra solo los usuarios que tienen carro
    usersWithCar = company.users.filter( (x) => x.car === hasCar);
    company.usersLength = usersWithCar.length;
    company.users = usersWithCar; // se setea el valor de los usuarios con carro
  }
  console.log('test:', newCompanies);
  return newCompanies;
};
console.log('** SOLUCTION EXAMPLE 2: ', secondExerciseSolution(companies, true));
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et le
// booléen "hasCar". Pour chaque "company" vous devez garder uniquement les
// "users" dont la valeur de l'attribut "car" est égal au paramètre de la
// fonction "hasCar" et l'attribut "usersLength" doit renseigner le nombre de
// "users" correspondant au paramètre "hasCar".
