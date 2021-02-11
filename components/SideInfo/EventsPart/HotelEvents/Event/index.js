import React from 'react'
import { Image } from 'react-native'
import { Div, Span } from '@startupjs/ui'
import { BASE_URL } from '@env'

import './index.styl'

const Event = ({
  title,
  img,
  location,
  date
}) => {
  const base = BASE_URL
  return pug`
    Div.root
      Div.wrapper
        Div.left
          Image.img(source={ uri: base+'/'+img })
        Div.center
          Span.title #{title}
          Span.location #{location}
          Span.date #{date}
      Div.line
  `
}

export default Event
