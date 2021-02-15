import React from 'react'
import { Div, Span, Avatar, Button, Row } from '@startupjs/ui'
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons'

import './index.styl'

const Comment = ({
  id,
  avatar,
  authorName,
  text,
  date,
  last
}) => {
  const onRemoveClick = () => {
    console.log(`Delete comment with id ${id}`)
  }

  return pug`
    Row
      Div.left
        Avatar(src=avatar)
      Div(styleName={last}).center
        Span.author #{authorName} 
          Span.text #{text}
        Span.date #{date}
      Div(styleName={last}).right
        Button(
          variant='text'
          onPress=onRemoveClick
          icon=faTimes
          color='error'
        )
        
  `
}

export default Comment
