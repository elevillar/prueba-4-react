import { useState } from 'react';

const Buscador = ({ handleFilter }) => {
  const [searchName, setSearchName] = useState('')
  const [searchSpecies, setSearchSpecies] = useState('')

  const handleNameSearch = (e) => {
    const searchValue = e.target.value;
    setSearchName(searchValue)
    handleFilter(searchValue, searchSpecies) // Llama a la función de filtro del componente padre
  };

  const handleSpeciesChange = (e) => {
    const speciesValue = e.target.value
    setSearchSpecies(speciesValue)
    handleFilter(searchName, speciesValue); // Llama a la función de filtro del componente padre
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '25px' }}>
      <input
        type='text'
        placeholder='Ingresa un personaje'
        className="form-control"
        value={searchName}
        onChange={handleNameSearch}
        style={{ marginRight: '10px' }}
      />
      <select
        className='form-control'
        value={searchSpecies}
        onChange={handleSpeciesChange}
      >
        <option value=''>Selecciona una especie</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
      </select>
    </div>
  )
}

export default Buscador
