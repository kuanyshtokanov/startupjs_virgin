import React from 'react'
import { Div, Span, Icon } from '@startupjs/ui'
import {
  faCheck,
  faTimes,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

import Comments from '../../Comments'
import './index.styl'

const Suggestion = ({
  title,
  authorName,
  date,
  text,
  vote,
  comments,
  index
}) => {
  return pug`
    Div.suggestion
      Div.left
        Span.index #{index}
      Div.right
        Span.title #{title}
        Span.author #{authorName}  
          Span.time #{date}
        Span.text #{text}
        Div.bottom
          Div.bottomLeft
            Icon.check(icon=faCheck)
            Span.vote vote: 
              Span.voteNumber #{vote}
          Div.bottomRight
            Icon.remove(icon=faTimes)
            Div.manage
              Icon.heart(icon=faHeart)
              Span.manageTxt manage
        Comments(comments=comments)
  `
}

export default Suggestion