//Manejo el caso en el que la base de datos no devuelva nada:
//si no hay filas devueltas retorno un array vacío []
//si hay filas devueltas retorno las filas.
function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}
  
module.exports = {
    emptyOrRows
}