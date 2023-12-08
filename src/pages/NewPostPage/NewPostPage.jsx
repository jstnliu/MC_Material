
import PostForm from '../../components/PostForm/PostForm'

export default function NewPostPage({ addPost }) {
  return (
    <>
      <h2>What's the Verdict?</h2>
      <PostForm addPost={ addPost } />
    </>
  )
}
