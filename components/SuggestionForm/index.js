import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Div, H1, H3, TextInput, Span, Button, Icon } from '@startupjs/ui'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import * as style from './index.styl'

const { inputArea } = style

const SuggestionForm = () => {
  const [title, setTitle] = useState('')
  const [suggestion, setSuggestion] = useState('')
  const [open, setOpen] = useState(true)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handlePost = () => {
    console.log('Post button clicked!')
  }

  return pug`
    Div.root
      Div.top
        H1.title ADD A SUGGESTION
        TouchableOpacity(onPress=handleOpen)
          if !open
            Icon.icon(icon=faChevronDown size='xl')
          else
            Icon.icon(icon=faChevronUp size='xl')
      H3.hint We love to hear new ideas on how to be even more awesome
      Div.inputForm(styleName=[{ visible:open }])
        TextInput.inputArea.first(
          placeholder='Title of suggestion'
          inputStyle=inputArea
          value=title
          onChangeText=setTitle
        )
        TextInput.inputArea(
          placeholder='Make a suggestion'
          inputStyle=inputArea
          multiline
          numberOfLines=4
          value=suggestion
          onChangeText=setSuggestion
        )
        Div.info
          Div.left
            Span.contactTxt To send a private suggestion email ut at:
            Span.email CULTURE@VIRGINHOTEL.COM
          Div.right
            Button.button( onPress=handlePost ) POST
  `
}

export default SuggestionForm
