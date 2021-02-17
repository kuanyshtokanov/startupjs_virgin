import React from 'react'
import { ScrollView, ImageBackground } from 'react-native'
import { observer } from 'startupjs'
import { Div, Layout, Span, Portal } from '@startupjs/ui'
import { BASE_URL } from '@env'

import './index.styl'
import Header from '../../../components/Header'
import Main from '../../../components/Main'

export default observer(function PHome () {
  const base = BASE_URL
  return pug`
    ScrollView.root
      Layout
        ImageBackground.container(
          source={uri: base+'/background.png'}
        )
          Portal.Provider
            Header
            Div.break
              Span.txt Bare it!
            Main
  `
})
