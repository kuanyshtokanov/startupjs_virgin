import React from 'react'
import { Div, Span } from '@startupjs/ui'
import './index.styl'

const TabItem = ({
  tabData,
  onChange,
  active,
}) => {

  return pug`
    Div.tab(styleName=[{ active }])
      Div.header
        Span.tabWrapper( onPress=() => onChange(tabData.title) )
          Span.tabTitle(styleName=[{ active }]) #{tabData.title}
          if active
            Div.activeHint
  `
}

export default TabItem