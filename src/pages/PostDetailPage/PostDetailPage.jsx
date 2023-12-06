import PostDetailItem from '../../components/PostDetailItem/PostDetailItem'

import { useState, useEffect } from 'react'
import * as postsAPI from '../../utilities/posts-api'

export default function PostDetailPage() {

  const [postDetails, setPostDetails] = useState([])

  useEffect (() => {
    const handlePostView = async (id) => {
      const singlePost = await postsAPI.viewPost(id);
      setPostDetails(singlePost)
    };
    handlePostView()
  }, [])

  return (
    <>
      <PostDetailItem postDetails={ postDetails } />
    </>
  )
}
