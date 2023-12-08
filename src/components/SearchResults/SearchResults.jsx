import './SearchResults.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchResults({ animeData }) {

  const [selectedAnime, setSelectedAnime] = useState({})
  const navigate = useNavigate()

  const handleAddAnime = (anime) => {
    setSelectedAnime(anime)
  }

  return (
    animeData.map(anime => ((
      <>
        <div key={ anime.mal_id } className='border'>
          <h3>{ anime.title_english }</h3>
          <h4>{ anime.title_japanese }</h4>
          <p>{ anime.aired.string }</p>
          <p>episodes: { anime.episodes }</p>
          <img src={ anime.images.jpg.image_url } alt={ anime.title } />
          <p>{ anime.synopsis }</p>
          <button
          // call onClick for a function to add anime to database and navigate to post form
            onClick={ () => navigate(`/posts/new`) }
          >
            Start Post!
          </button>
        </div>
      </>
    )))
  )
}
