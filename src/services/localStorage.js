
const get = (key, defaultValue) => {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
      return defaultValue;
    } else {
      return JSON.parse(localStorageData);
    }
  };
  
  // Función que guarda una propiedad y su valor en el local storage
  const set = (key, value) => {
    const localStorageData = JSON.stringify(value);
    localStorage.setItem(key, localStorageData);
  };
  
  // Función que borra una propiedad del local storage
  const remove = (key) => {
    localStorage.removeItem(key);
  };
  
  // Función que limpia todo el local storage
  const clear = () => {
    localStorage.clear();
  };
  
  // Creamos un objeto temporal, que es el que queremos exportar
  // Este objeto tiene una propiedad get cuyo valor es la función get
  // Este objeto tiene una propiedad set cuyo valor es la función set
  // Este objeto tiene una propiedad remove cuyo valor es la función remove
  // Este objeto tiene una propiedad clear cuyo valor es la función clear
  const objectToExport = {
    get: get,
    set: set,
    remove: remove,
    clear: clear,
  };
  
  // Exportamos el objeto para que pueda ser usado desde App
  export default objectToExport;