import { useParams, useNavigate } from 'react-router-dom'
import { deletePost } from '../../utilities/posts-api'

export default function PostDetailItem({ postDetails, posts, setPosts }) {

  const { id } = useParams()
  const navigate = useNavigate()

  const handleDelete = async () => {
    const deletedPost = await deletePost(id);

    setPosts(deletedPost)
    navigate('/posts')
  }

  return (
    <>
        <h1>Are They MC Material?</h1>
          <p>Character: { postDetails.character }</p>
          <p>Rating: { postDetails.rating }</p>
          <p>Review: { postDetails.review }</p>
        <button
          onClick={ () => handleDelete() }
        >
          DELETE
        </button>

    </>
  )
}
