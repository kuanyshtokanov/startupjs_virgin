import React from 'react'
import { observer } from 'startupjs'
import { Div, Layout, Span, Portal } from '@startupjs/ui'

import './index.styl'
import Header from '../../../components/Header'
import Main from '../../../components/Main'

export default observer(function PHome() {
  return pug`
    Layout.root
      Div.container
        Portal.Provider
          Header
          Div.break
            Span.txt Bare it!
          Main
  `
})
