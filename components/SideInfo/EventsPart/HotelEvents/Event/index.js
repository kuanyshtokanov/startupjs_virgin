import React from 'react'
import { Image } from 'react-native'
import { Div, Span } from '@startupjs/ui'
import './index.styl'

const Event = ({
  title,
  img,
  location,
  date
}) => {
  return pug`
    Div.root
      Div.wrapper
        Div.left
          Image.img(source={ uri: img })
        Div.center
          Span.title #{title}
          Span.location #{location}
          Span.date #{date}
      Div.line
  `
}

export default Event
