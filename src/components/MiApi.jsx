import { useEffect, useState } from 'react'
import Buscador from './Buscador'

const MiApi = () => {
  const [info, setInfo] = useState([])
  const [filteredInfo, setFilteredInfo] = useState([]) // Estado para los resultados filtrados

  const consultarApi = async () => {
    const url = 'https://rickandmortyapi.com/api/character'
    const response = await fetch(url)
    const { results } = await response.json()
    setInfo(results)
    setFilteredInfo(results); // Inicialmente, mostrar todos los personajes
  };

  useEffect(() => {
    consultarApi()
  }, []);

  // Función para filtrar los personajes según la búsqueda
  const handleFilter = (searchValue, searchSpecies) => {
    let filteredResults = info.filter((personaje) =>
      personaje.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    if (searchSpecies) {
      filteredResults = filteredResults.filter((personaje) =>
        personaje.species.toLowerCase().includes(searchSpecies.toLowerCase())
      )
    }

    setFilteredInfo(filteredResults);
  }

  return (
    <div className='container'>
      <Buscador handleFilter={handleFilter} /> {/* Pasa la función de filtro al componente Buscador */}
      <div className='row'>
        {filteredInfo.map((item, index) => (
          <div key={index} className='col-md-3 mb-3'>
            <div className='card'>
              <img className='card-img-top' src={item.image} alt={item.name} />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>{item.species}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiApi
