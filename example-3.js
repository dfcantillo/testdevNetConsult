import {cleanConsole, createAll} from './data';
import {soluctionFirtExercise} from './example-1';
import {capitalizeInitialLatter} from './tools';
const companies = createAll();

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', 'Put here your function');
function thirdExerciseSolution(companies) {
  let result;
  companies = soluctionFirtExercise(companies);
  for (const company of companies) {
    // Nota esta solución se podria hacer con una expresión regular pero decidi utilizar el método
    // que permite capitalizar un nombre
    if (company.name) {
      result = (company.name === capitalizeInitialLatter(company.name)) ? true : false;
      if (result) {
        // Se recorre todos los usuario validando que todos los nombre y apellido esten en mayusculas
        company.users.forEach((user) => {
          const firstNameCapitalize = capitalizeInitialLatter(user.firstName);
          const lastNameCapitalize = capitalizeInitialLatter(user.lastName);
          if (user.firstName === firstNameCapitalize && user.lastName === lastNameCapitalize ) {
            result = true;
          } else {
            return false; // se finaliza el siclo si se encuentra un resultado que no tenga mayuscula
          }
        });
      } else {
        return false; // se finaliza si existe un nombre que no esta en mayuscula
      }
    }
  }
  // Validar nombre es mayuscula
  return result;
};
console.log('** SOLUCTION EXAMPLE : All names are capitalized:', thirdExerciseSolution(companies, true));
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un booleano que valida que todos los nombres de las empresas y los atributos
// "firstName" y "lastName" de "users" están en mayúsculas.
// Debes probar la operación de esta función importando la función creada
// en el "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js".

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un booléen validant que tous les noms des "company" et les attributs "firstName"
// et "lastName" des "users" sont en majuscules. Vous devez tester le fonctionnement
// de cette fonction en important la fonction créée pour "example-1.js".
