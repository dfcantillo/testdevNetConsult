
// =================================================
// Método que permite poner la iniciar de un texto en mayuscula
// =================================================
export function capitalizeInitialLatter(text) {
  text = `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
  return text;
}

export function getNameCompanyById(id, companies) {
  name = companies.find( (company) => company.id === id).name;
  return name;
}

export function deleteCompanyById(id, companies) {
  const newCompanies = companies.map((company) => ({...company})); // se quita la fererencia del objecto.
  const indexCompany = newCompanies.findIndex(( company) => company.id = id);
  if (indexCompany >= 0) {
    newCompanies.splice(indexCompany, 1); // Se elimina la compañia de la lista de compañias
    console.log('Delete company: ', companies[indexCompany] );
  }
  return newCompanies;
}
