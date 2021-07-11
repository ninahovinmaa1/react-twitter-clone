import React from 'react'
import Author from './Author'
import Content from './Content'
import Date from './Date'
import Thumbnail from './Thumbnail'


export default function Tweet({ author, date, content, imageURL }) {
  return (
    <div>
      <div>
        <Thumbnail imageURL={imageURL}/>
      </div>
      <div>
        <Author author={author}/>
        <Content content={content}/>
      </div>
      <div>
        <Date date={date}/>
      </div>

    </div>
  )
}
