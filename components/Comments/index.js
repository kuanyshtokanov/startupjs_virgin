import React from 'react'
import { Div } from '@startupjs/ui'

import Comment from './Comment'
import CommentForm from './CommentForm'
import './index.styl'

const Comments = ({
  comments
}) => {
  return pug`
    Div.comments
      each comment, index in comments
        Comment(key=index ...comment last=index===comments.length-1)
      CommentForm
  `
}

export default Comments
