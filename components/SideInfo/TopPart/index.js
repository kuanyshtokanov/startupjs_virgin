import React, { useState } from 'react'
import { Image } from 'react-native'
import { Div, H3 } from '@startupjs/ui'

import './index.styl'

const TopPart = () => {

  return pug`
    Div.root
      Image.img(source={uri:'/make-love-text.svg'})
      H3.hashtag #mlsh
  `
}

export default TopPart