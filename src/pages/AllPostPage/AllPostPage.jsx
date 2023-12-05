import { useState, useEffect } from 'react'
import * as postsAPI from '../../utilities/posts-api'
import PostItem from '../../components/PostItem/PostItem'

export default function AllPostPage() {
  
  const[postItems, setPostItems] = useState([])
  
  useEffect(function() {
    async function getPosts() {
      const allPosts = await postsAPI.getAllPosts();
      setPostItems(allPosts)
    }
    getPosts();
  }, [])
  
  const postItem = postItems.map((post, idx) =>
    <PostItem 
      key={ idx } 
      postItem={ post }
    />) 

  return (
    <>
      <h1>Feed</h1>
      { postItem }
    </>
  )
}

