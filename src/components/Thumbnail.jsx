import React from 'react'

export default function Thumbnail({ imageURL }) {
  return (
    <img className="img-fluid" src={imageURL} alt="avatar-icon"/>
  )
}