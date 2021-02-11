import React from 'react'
import { ScrollView, ImageBackground, StyleSheet } from 'react-native'
import { observer } from 'startupjs'
import { Div, Layout, Span, Portal } from '@startupjs/ui'
import { BASE_URL } from '@env'

import './index.styl'
import Header from '../../../components/Header'
import Main from '../../../components/Main'

export default observer(function PHome () {
  const base = BASE_URL
  const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: '100%',
      height: '100%'
    }
  })
  return pug`
    ScrollView.root
      Layout
        ImageBackground(source={uri: base+'/background.png'} style=styles.backgroundContainer).container
          Portal.Provider
            Header
            Div.break
              Span.txt Bare it!
            Main
  `
})
