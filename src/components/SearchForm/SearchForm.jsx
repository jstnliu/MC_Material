import SearchResults from '../SearchResults/SearchResults'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as jikanAPI from '../../utilities/jikan-api'

export default function SearchForm() {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [animeData, setAnimeData] = useState([])

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    async function handleAddSearch(event) {
        event.preventDefault()
        const searchResponse = await jikanAPI.searchAnimeResults(search)
        setAnimeData(searchResponse)
    }

  return (
    <>
      <div>SearchForm</div>
      <form
        onSubmit={ handleAddSearch }
      >
        <label>
          Search for Anime
            <input 
              name='anime'
              onChange={ handleSearchChange }
              value={ search.anime }
            />
        </label>
        <button>
          Search
        </button>
      </form>
      { animeData && <SearchResults animeData={ animeData }/> }
    </>
  )
}
