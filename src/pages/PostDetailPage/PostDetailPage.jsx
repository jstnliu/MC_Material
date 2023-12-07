import PostDetailItem from '../../components/PostDetailItem/PostDetailItem'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as postsAPI from '../../utilities/posts-api'

export default function PostDetailPage({ posts, setPosts }) {

  const [postDetails, setPostDetails] = useState([])
  const { id } = useParams()

  useEffect (() => {
    const handlePostView = async () => {
      const singlePost = await postsAPI.viewPost(id);
      setPostDetails(singlePost)
    };
    handlePostView()
  }, [id])

  return (
    <>
      <PostDetailItem 
        postDetails={ postDetails } 
        posts={ posts }
        setPosts={ setPosts }
      />
    </>
  )
}
