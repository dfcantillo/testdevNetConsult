
// =================================================
// Método que permite poner la iniciar de un texto en mayuscula
// =================================================
export function capitalizeInitialLatter(text) {
  text = `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
  return text;
}
