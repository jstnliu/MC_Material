import { useNavigate } from 'react-router-dom'

export default function SearchResults({ animeData }) {
  
  const navigate = useNavigate()

  return (
    animeData.map(anime => {(
      <>
        <div key={ anime.mal_id }>
          <h3>{ anime.title }</h3>
          <img src={ anime.images.jpg.image_url } alt={ anime.title } />
          <p>{ anime.synopsis }</p>
          <button
            onClick={ () => navigate(`/posts/new`) }
          >
            Start Post!
          </button>
        </div>
      </>
      )}
    )
  )}
