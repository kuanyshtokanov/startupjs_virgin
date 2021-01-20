import React from 'react'
import { Image } from 'react-native'
import { Div } from '@startupjs/ui'

import './index.styl'

const Logo = () => {
  return pug`
    Div.root
      Image.img(source = { uri: 'main-logo-white.png' })
  `
}

export default Logo