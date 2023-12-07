import SearchForm from '../../components/SearchForm/SearchForm'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../utilities/posts-api'
import './PostForm.css'

export default function PostForm({ addPost }) {
  const navigate = useNavigate()
  const [postData, setPostData] = useState({
    anime: '',
    rating: 3,
    review: ''
  })

  function handleChange(event) {
    const newPostData = { ...postData, [event.target.name]: event.target.value }
    setPostData(newPostData)
  }

  function handleAddPost(event) {
    event.preventDefault()
    const postResponse = createPost(postData)
    addPost(postResponse)
    setPostData({
      anime: '',
      rating: 3,
      review: ''
    });
    navigate('/posts')
  }

  return (
    <>
    <SearchForm />
    <form
      onSubmit={ handleAddPost }
    >
        <label className='Font'>
          Anime
        </label>
          <input
            type='text'
            name='anime'
            onChange={ handleChange }
            value={ postData.anime }
          />
        <label className='Font'>
          Rating
        </label>
          <select
            name='rating'
            onChange={ handleChange }
            value={ postData.rating }
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        <label className='Font'>
          Review
        </label>
          <textarea
            type='text'
            name='review'
            onChange={ handleChange }
            value={ postData.review }
          >
          </textarea>
        <button 
          type='submit'  
        >
          POST
        </button>
    </form>
    </>
  )
}
