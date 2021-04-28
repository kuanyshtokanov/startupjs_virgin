import React from 'react'
import { Image } from 'react-native'
import { observer, emit, useValue, useLocal } from 'startupjs'
import { Row, Div, Layout, SmartSidebar, Menu, Button, H1, Icon, Span } from '@startupjs/ui'
import { BASE_URL } from '@env'
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
import SocialInfo from 'components/SocialInfo'
import APP from '../../app.json'
import { menuItems } from '../../consts'

import './index.styl'

const { displayName } = APP

const APP_NAME = displayName.charAt(0).toUpperCase() + displayName.slice(1)

const MenuItem = observer(({ url, children }) => {
  const [currentUrl] = useLocal('$render.url')
  return pug`
    case children
      when 'PREP'
        Menu.Item.menuItem(
          active=currentUrl === url
          onPress=() => emit('url', url)
        )
          Row.rowMenu
            Span.item V
            Icon.item(icon=faHeart)
            Span.item=children
      when 'PEEPS'
        Menu.Item.menuItem(
          active=currentUrl === url
          onPress=() => emit('url', url)
        )
          Row.rowMenu
            Span.item V
            Icon.item(icon=faHeart)
            Span.item=children
      default
        Menu.Item.menuItem(
          active=currentUrl === url
          onPress=() => emit('url', url)
        )
          Span.item=children
    
  `
})

export default observer(function ({ children }) {
  const [opened, $opened] = useValue(false)
  const base = BASE_URL

  function renderSidebar () {
    return pug`
      Menu.sidebar-menu
        Div.logoDiv
          Image.img(source={ uri: base+'/main-logo-white.png' })
        each item, index in menuItems
          MenuItem(key=index url='/')=item
        Div.social
          SocialInfo
    `
  }

  return pug`
    Layout
      SmartSidebar.sidebar(
        path=$opened.path()
        renderContent=renderSidebar
      )
        Row.menu
          Button(color='secondaryText' icon=faBars onPress=() => $opened.set(!opened))
          H1.logo= APP_NAME

        Div.body= children
  `
})
