import PostForm from '../../components/PostForm/PostForm'

export default function NewPostPage({ addPost }) {
  return (
    <>
      <h1>NewPostPage</h1>
      <PostForm addPost={ addPost } />
    </>
  )
}
