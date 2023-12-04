import { useState } from 'react'
import { createPost } from '../../utilities/posts-api'
import './PostForm.css'

export default function PostForm({ addPost }) {

  const [postData, setPostData] = useState({
    character: '',
    rating: 3,
    review: ''
  })

  function handleChange(event) {
    const newPostData = { ...postData, [event.target.name]: [event.target.value] }
    setPostData(newPostData)
  }

  async function handleAddPost(event) {
    event.preventDefault()
    try {
      const postResponse = await createPost(postData)
      addPost(postResponse)
      setPostData({
        character: '',
        rating: 3,
        review: ''
      })
    } catch(error) {
      console.error('Error creating post: ', error)
    }
  }

  return (
    <>
    <form
      onSubmit={ handleAddPost }
    >
        <label className='Font'>
          Character
        </label>
          <input
            name='character'
            onChange={ handleChange }
            value={ postData.character }
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
            name='review'
            onChange={ handleChange }
            value={ postData.review }
          >
          </textarea>
        <button type='submit'>POST</button>
    </form>
    </>
  )
}
