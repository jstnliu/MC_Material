import { useNavigate } from 'react-router-dom'
import './PostItem.css'

export default function PostItem({ postItem }) {

  const navigate = useNavigate()

  return (
    <>
      <div className='postBorder'>
        <h4>{ postItem.anime }</h4>
        <p>{ postItem.rating }</p>
        <p>{ postItem.review }</p>
        {/* separate prop for unique user.name */}
        <button
          onClick={ () => navigate(`/posts/${postItem._id}`) }
        >
          View Post
        </button>
      </div>
    </>
  )
}
