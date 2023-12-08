import SearchForm from '../../components/SearchForm/SearchForm'

import { useState } from 'react'
import * as jikanAPI from '../../utilities/jikan-api'

export default function SearchAnimePage() {

  const [animes, setAnime] = useState([])

  function addAnime(anime) {
    setAnime([...animes, anime])
  }

  return (
    <>
        <div>SearchAnimePage</div>
        <SearchForm addAnime={ addAnime } />
    </>
  )
}
