import PostDetailItem from '../../components/PostDetailItem/PostDetailItem'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as postsAPI from '../../utilities/posts-api'

export default function PostDetailPage() {

  const [postDetails, setPostDetails] = useState([])
  const { id } = useParams()

  useEffect (() => {
    const handlePostView = async () => {
      const singlePost = await postsAPI.viewPost(id);
      setPostDetails(singlePost)
      console.log(postDetails)
      console.log(singlePost)
    };
    handlePostView()
  }, [])

  return (
    <>
      <PostDetailItem postDetails={ postDetails } />
    </>
  )
}
