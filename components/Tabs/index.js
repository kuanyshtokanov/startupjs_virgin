import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Div, Span } from '@startupjs/ui'
import './index.styl'

import TabItem from './TabItem'

const Tabs = ({ children }) => {
  const [currentTab, setCurrentTab] = useState('ALL')

  const tabs = [
    {
      title: 'ALL',
    },
    {
      title: 'MOST LOVED',
    },
    {
      title: 'IN ACTION',
    },
    {
      title: 'ARCHIVE',
    },
  ]

  return pug`
    Div.tabs
      Div.header
        each tab, index in tabs
          TabItem(key=index tabData=tab onChange=setCurrentTab active=tab.title===currentTab)
      Div.content #{children}
  `
}

export default Tabs
