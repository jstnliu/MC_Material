import { useParams, useNavigate } from 'react-router-dom'
import * as postsAPI from '../../utilities/posts-api'

export default function PostDetailItem({ postDetails, posts, setPosts }) {

  const { id } = useParams()
  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      const postToDelete = await postsAPI.deletePost(id)
      const allOtherPosts = posts.filter(post => post._id !== postToDelete._id)
      setPosts(allOtherPosts)
    } catch (error) {
      console.error('failed to run handleDelete:', error)
    }
    navigate('/posts')
  } 

  return (
    <>
        <h1>Are They MC Material?</h1>
        <div>
          <p>Anime: { postDetails.anime }</p>
          <p>Rating: { postDetails.rating }</p>
          <p>Review: { postDetails.review }</p>
        <button
          onClick={ () => handleDelete() }
        >
          DELETE
        </button>
        </div>
    </>
  )
}
