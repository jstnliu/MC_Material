import { Link } from 'react-router-dom'
import './PostItem.css'

export default function PostItem({ postItem }) {

  return (
    <>
      <div className='postBorder'>
        <h4>{ postItem.character }</h4>
        <p>{ postItem.rating }</p>
        <p>{ postItem.review }</p>
        {/* separate prop for unique user.name */}
        <Link to='/posts/:id'>View Details</Link>
      </div>
    </>
  )
}
