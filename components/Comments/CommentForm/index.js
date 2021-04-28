import React, { useState } from 'react'
import { Div, TextInput, Avatar, Row } from '@startupjs/ui'

import styles from './index.styl'

const { inputStyle } = styles

const CommentForm = () => {
  const [commentValue, setCommentValue] = useState('')

  return pug`
    Row.commentForm
      Div.left
        Avatar(src='anonymous_avatar.jpg')
      Div.right
        TextInput(
          placeholder='Reply to this suggestion...'
          inputStyleName=inputStyle
          value=commentValue
          onChangeText=setCommentValue
          multiline
        )
  `
}

export default CommentForm
