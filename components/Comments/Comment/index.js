import React from 'react'
import { Div, Span, Avatar, Icon } from '@startupjs/ui'
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import './index.styl'

const Comment = ({
  id,
  avatar,
  authorName,
  text,
  date,
}) => {

  const onRemoveClick = () => {
    console.log(`Delete comment with id ${id}`)
  }

  return pug`
    Div.comment
      Div.left
        Avatar(src=avatar)
      Div.center
        Span.author #{authorName} 
          Span.text #{text}
        Span.date #{date}
      Div.right(onPress=onRemoveClick)
        Icon.delete(icon=faTimes)
  `
}

export default Comment
