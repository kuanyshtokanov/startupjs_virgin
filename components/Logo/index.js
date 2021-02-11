import React from 'react'
import { Image } from 'react-native'
import { Div } from '@startupjs/ui'
import { BASE_URL } from '@env'

import './index.styl'

const Logo = () => {
  const base = BASE_URL
  return pug`
    Div.root
      Image.img(source = { uri: base+'/main-logo-white.png' })
  `
}

export default Logo
