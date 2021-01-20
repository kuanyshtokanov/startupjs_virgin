import React from 'react'
import { Div, Span } from '@startupjs/ui'

import Comment from './Comment'
import CommentForm from './CommentForm'
import './index.styl'

const Comments = ({
  comments
}) => {
  return pug`
    Div.comments
      each comment in comments
        Comment(...comment)
      CommentForm
  `
}

export default Comments