
// =================================================
// Método que permite poner la iniciar de un texto en mayuscula
// =================================================
export function capitalizeInitialLatter(text) {
  text = `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
  return text;
}
// =================================================
// Método que permite obtener el nombre de una compañia
// =================================================
export function getNameCompanyById(id, companies) {
  name = companies.find( (company) => company.id === id).name;
  return name;
}
// =================================================
// Método que permite eliminar una compañia por id
// =================================================
export function deleteCompanyById(id, companies) {
  const newCompanies = companies.map((company) => ({...company})); // se quita la fererencia del objecto.
  const indexCompany = newCompanies.findIndex(( company) => company.id = id);
  if (indexCompany >= 0) {
    newCompanies.splice(indexCompany, 1); // Se elimina la compañia de la lista de compañias
    console.log('Delete company: ', companies[indexCompany] );
  }
  return newCompanies;
}
// =================================================
// Método que permite crear un nuevo usuario en una compañia especifica
// =================================================
export function createUserInCompany(id, companies, user) {
  const newCompanies = companies.map((company) => ({...company})); // se quita la fererencia del objecto.
  const company = newCompanies.find( (company) => company.id === id);
  company.users.push(user);
  console.log('***** The user new was created in: ', company.name );
  company.usersLength = company.users.length;
  return newCompanies;
}
// =================================================
// Método que permite eliminar un usuario por id de una compañia
// =================================================
export function deleteUserById(id, idUser, companies) {
  const newCompanies = companies.map((company) => ({...company})); // se quita la fererencia del objecto.
  const company = newCompanies.find( (company) => company.id === id);
  const indexUser = company.users.findIndex(( user) => user.id === idUser);
  if ( indexUser >= 0) {
    console.log(`${company.users[indexUser].firstName}: Was removed from the company ${company.name}`);
    company.users.splice(indexUser, 1);
  }
  company.usersLength = company.users.length;
  return newCompanies;
}
// =================================================
// Método que permite transferir un usuario de una compañia o otra
// =================================================
export function transferUser(firstId, secondId, idUser, companies) {
  const newCompaniesT = companies.map((company) => ({...company})); // se quita la fererencia del objecto.
  const firstcompany = newCompaniesT.find( (company) => company.id === firstId);
  const secondCompany = newCompaniesT.find( (company) => company.id === secondId);
  const user = firstcompany.users.find(( user) => user.id === idUser); // usuario a tranferir
  if (user) {
    secondCompany.users.push(user); // se inserta el el usuario en la segunda compañia
    secondCompany.usersLength = secondCompany.users.length; // se actualiza total de usuarios
    // Se elimina el usuario de la primera d compañia
    firstcompany.users = firstcompany.users.filter( (x) => x.id !== user.id);
    firstcompany.usersLength = firstcompany.users.length;
    console.log(`** The id: ${user.id} was removed from ${firstcompany.name} 'and' added 'to' ${secondCompany.name}`);
  }
  return newCompaniesT;
}
export function pathCompany(id, data, companies) {
  const newCompaniesT = companies.map((company) => ({...company})); // se quita la fererencia del objecto.
  const company = newCompaniesT.find( (company) => company.id === id);
  if (company) {
    company.id = Math.floor(0 + Math.random() * (1000 - 0));
    company.name = data.name;
    company.isOpen =data.isOpen;
    company.usersLength = data.usersLength;
  }
  return company;
}

// =================================================
// Método que permite hacer una simulación de una llada a un servidor para actualizar un usuario
// =================================================
export function putUser(firstId, idUser, companies) {
  const newCompaniesT = companies.map((company) => ({...company})); // se quita la fererencia del objecto.
  const company = newCompaniesT.find( (company) => company.id === firstId);
  return new Promise((resolve, reject) => {
    const user = company.users.find(( user) => user.id === idUser);
    console.log('**** Waiting for a response fron the server', user);
    if (user) {
      setTimeout( () => {
        user.firstName = 'Diego';
        user.lastName = 'Cantillo';
        user.age = '25';
        user.car = true;
        resolve(company);
      }, 3000);
    }
  });
}
