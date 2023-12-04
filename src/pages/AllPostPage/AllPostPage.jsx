
import PostItem from '../../components/PostItem/PostItem'

export default function AllPostPage({ posts }) {
  
  const postItems = posts.map((post, idx) => <PostItem post={ post } key={ idx } />) 

  return (
    <>
      <h1>Feed</h1>
      { postItems }
    </>
  )
}

