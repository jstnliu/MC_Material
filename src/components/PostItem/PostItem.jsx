import React from 'react'

export default function PostItem({ post, idx }) {
  return (
    <>
    <div>
    <h4>{ post.character }</h4>
    <p>{ post.rating }</p>
    <p>{ post.review }</p>
  </div>
    </>
  )
}
