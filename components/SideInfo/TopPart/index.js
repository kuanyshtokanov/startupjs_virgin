import React from 'react'
import { View } from 'react-native'
import { Div, H3 } from '@startupjs/ui'
import MakeLoveText from '../../../public/make-love-text.svg'

import './index.styl'

const TopPart = () => {
  return pug`
    Div.root
      View.imgWrapper
        MakeLoveText
      H3.hashtag #mlsh
  `
}

export default TopPart
