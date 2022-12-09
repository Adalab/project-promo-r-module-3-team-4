// Fichero src/components/ImageReader.js
import { useRef } from 'react';

/*
El orden cronológico en el que se ejecuta este componente es:
- Se renderiza la primera vez
  - Se crea la referencia fileElement
  - Se crea el lector de ficheros fileReader
  - Se pinta el input file
- Cuando la usuaria selecciona una imagen:
  - Se ejecuta la función handleFile
    - Esta función ejecuta fileReader.readAsDataURL(selectedFile)
    - La función readAsDataURL lee el contenido de la imagen
    - La función readAsDataURL es asíncrona. Cuando termine lanzará un evento 'load'.
- Pasados unos milisegundos, cuando se lance el evento 'load':
  - Se ejecutará la función getImage
    - Que subirá los datos de la imagen por lifting
*/

const ImageReader = (props) => {
  // Creamos una referencia al input file para poder leer su contenido más tarde
  const fileElement = useRef();

  // Creamos un lector de ficheros
  // FileReader es una funcionalidad nativa de JavaScript, búscala en Internet si te atreves
  const fileReader = new FileReader();

  // Cuando la usuaria selecciona una imagen se ejecuta esta función
  const handleFile = () => {
    // fileElement.current es literalmente el input file
    // Sacamos su propiedad files que es un array con todas las imágenes seleccionadas por la usuaria
    // Como solo queremos la primera imagen seleccionada guardamos el primer elemento de files
    const selectedFile = fileElement.current.files[0];

    // Si la usuaria ha seleccionado al menos una imagen, selectedFile será diferente de undefined
    if (selectedFile) {
      // Le decimos al lector de ficheros que lea el fichero seleccionado por la usuaria
      fileReader.readAsDataURL(selectedFile);
      // Cuando esta acción termine, fileReader lanzará el evento 'load'
    }
  };

  // Esta función se ejecuta cuando fileReader lanza el evento 'load'
  const getImage = () => {
    // Cuando la imagen ya esté lista en fileReader.result tendremos su contenido
    // Hacemos lifting de este contenido hacia arriba
    props.handleImage(fileReader.result);
  };

  // Escuchamos el evento load de fileReader y cuando se lance lo manejamos con la función getImage
  fileReader.addEventListener('load', getImage);

  return (
    <label
      htmlFor="profile-image"
      className="fill__label fill__label--profileimage">
      <div className="fill__label__container ">
        <label
          className="fill__label__container--button"
          htmlFor="img-selector">
          Añadir imagen
        </label>
        <input
          ref={fileElement}
          type="file"
          name="photo"
          id="img-selector"
          className="action__hiddenField js__profile-upload-btn js_input_photo fill__label__text--profileimage collapse"
          required
          onChange={handleFile}
        />

        <div
          className="fill__label__container--box js__profile-preview"
          style={{ backgroundImage: `url(${props.photo})` }}></div>
      </div>
    </label>
  );
};

export default ImageReader;
