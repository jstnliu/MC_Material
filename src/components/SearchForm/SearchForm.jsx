import { useState } from 'react'
import * as jikanAPI from '../../utilities/jikan-api'

export default function SearchForm() {

    const [search, setSearch] = useState([])
    const [searchResults, setSearchResults] = useState()

    // const searchData

    const handleSearchChange = (event) => {
        const newSearch = {...search, [event.target.name]: event.target.value}
        setSearch(newSearch)
    }

    function handleAddSearch(event) {
        event.preventDefault()
        const searchResponse = jikanAPI.searchAnimeResults(search)
    }

  return (
    <div>SearchForm</div>

  )
}
