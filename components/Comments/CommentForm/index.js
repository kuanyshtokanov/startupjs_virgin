import React, { useState } from 'react'
import { Div, Span, TextInput, Avatar } from '@startupjs/ui'

import styles from './index.styl'

const { inputStyle, send } = styles

const CommentForm = () => {
  const [commentValue, setCommentValue] = useState('')

  return pug`
    Div.commentForm
      Div.left
        Avatar(src='anonymous_avatar.jpg')
      Div.right
        TextInput(
          placeholder='Reply to this suggestion...'
          inputStyle=inputStyle
          value=commentValue
          onChangeText=setCommentValue
          multiline
        )
  `
}

export default CommentForm