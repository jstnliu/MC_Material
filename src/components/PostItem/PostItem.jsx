import './PostItem.css'

export default function PostItem({ idx, postItem }) {

  return (
    <>
      <div className='postBorder'>
        <h4>{ postItem.character }</h4>
        <p>{ postItem.rating }</p>
        <p>{ postItem.review }</p>
        {/* separate prop for unique user.name */}
      </div>
    </>
  )
}
