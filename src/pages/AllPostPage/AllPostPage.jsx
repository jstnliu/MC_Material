import PostItem from '../../components/PostItem/PostItem'

import { useState, useEffect } from 'react'
import * as postsAPI from '../../utilities/posts-api'

export default function AllPostPage() {
  
  const [postItems, setPostItems] = useState([])
  
  // display all posts on page render
  useEffect(() => {
    const getPosts = async () => {
      const allPosts = await postsAPI.getAllPosts();
      setPostItems(allPosts)
    }
    getPosts();
  }, [])
  
  const postItem = postItems.map((post) =>
    <PostItem 
      key={ post._id } 
      postItem={ post }
    />
  ) 

  return (
    <>
      <h1>Feed</h1>
      { postItem }
    </>
  )
}

