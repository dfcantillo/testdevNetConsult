import {createAll, cleanConsole} from './data';
import {capitalizeInitialLatter} from './tools';

const companies = createAll();

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', 'Put here your function');
// =================================================
// Método que permite dar solución  primer ejercicio
// =================================================
export function soluctionFirtExercise(companies) {
  for (const company of companies) {
    company.name = capitalizeInitialLatter(company.name);// Nombre capitalizado
    const users = company.users.sort( (a, b) => a.firstName > b.firstName ? 1 : -1);
    // Organizar valores indefinidos y poner iniciar en mayuscula
    users.forEach((user) => {
      user.firstName = (!user.firstName) ? '' : capitalizeInitialLatter(user.firstName);
      user.lastName = (!user.lastName) ? '' : capitalizeInitialLatter(user.lastName);
    });
    company.users.sort( (a, b) => a.firstName > b.firstName ? 1 : -1); // ordernar nombre
  }
  // Ordenamiento decreciente de compañias  por el total de usuarios.
  companies.sort( (a, b) => b.usersLength - a.usersLength);


  return companies;
};
console.log('** SOLUCTION EXAMPLE 1: ', soluctionFirtExercise(companies));


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando la variable "companies" como parámetro y reemplazando
// todos los valores "undefined" en "usuarios" por un string vacío.
// El nombre de cada "company" debe tener una letra mayúscula al principio, así como
// el apellido y el nombre de cada "user".
// Las "companies" deben ordenarse por su total de "user" (orden decreciente)
// y los "users" de cada "company" deben aparecer en orden alfabético.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et remplaçant
// toutes les valeurs "undefined" dans les "users" par un string vide.
// Le nom de chaque "company" doit avoir une majuscule au début ainsi que
// le nom et le prénom de chaque "user".
// Les "companies" doivent être triées par leur nombre de "user" (ordre décroissant)
// et les "users" de chaque "company" doivent être classés par ordre alphabétique.
