import { Gallery } from 'react-grid-gallery'

const source = [
    "gallery/maxim-tolchinskiy-W3y2crFkVIs-unsplash.jpg",
    "gallery/mike-marrah-8687b4ITjhA-unsplash.jpg",
    "gallery/naja-bertolt-jensen-FxnqdmKBJps-unsplash (1).jpg",
    "gallery/s-nkGlvNtKOmg-unsplash.jpg"
]

const images = [
    {
       src: source[0],
       width: 320,
       height: 212,
       customOverlay: (
        <div className="custom-overlay__caption">
          <div>"Es inaceptable que sigan existiendo 7 millones de muertes evitables e innumerables años de buena salud perdidos debido a la contaminación del aire" - Dra. Maria Neira (OMS)</div>
        </div>
      ),    
      caption: "After Rain (Jeshu John - designerspics.com)",     
    },
    {
      src: source[2],
       width: 320,
       height: 212,       
       customOverlay: (
        <div className="custom-overlay__caption">
          <div>  
            No solo perjudicamos el aire que respiramos, a diario millones de toneladas de plasticos de un solo uso se descartan contaminado ríos y mares.
          </div>
        </div>
      )    
    },
    {
    src: source[3],
       width: 320,
       height: 212,
       customOverlay: (
        <div className="custom-overlay__caption">
          <div>  
            99% de la población mundial respira un aire que supera los límites de calidad recomendados por la OMS 
          </div>
        </div>
      )    
    }
  ]
  
  function Images() {
    return (
      <div>
        <Gallery 
          images={images}  //propiedad requerida. recibe un arreglo de objetos con información de las imagenes
          rowHeight= {350} //especifica la dimensión de las filas de imagenes en la galeria
          margin = {10}    //margen de cada una de las imagenes 
        />         
      </div>
    )
  }
  
  export default Images
  