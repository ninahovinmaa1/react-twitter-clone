import React from 'react'
import Author from './Author'
import Content from './Content'
import Date from './Date'
import Thumbnail from './Thumbnail'


export default function Tweet({ author, date, content, imageURL }) {
  return (
    <div className="row p-3 border mb-2">
      <div className="col-sm-2">
        <Thumbnail imageURL={imageURL}/>
      </div>
      <div className="col-sm-6">
        <Author author={author}/>
        <Content content={content}/>
      </div>
      <div className="col-sm-4">
        <Date date={date}/>
      </div>

    </div>
  )
}
