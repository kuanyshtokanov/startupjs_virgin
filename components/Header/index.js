import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Div, Icon } from '@startupjs/ui'
import {
  faBars
} from '@fortawesome/free-solid-svg-icons'

import './index.styl'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import Logo from '../Logo'
import Profile from '../Profile'

const Header = () => {
  const [open, setDrawer] = useState(false)
  const menuItems = [
    'VALENTINES',
    'PEEPS',
    'PREP',
    'BARE IT',
    'CULTURE',
    'TRIBE',
    'RESOURCES',
    'VOWEL'
  ]

  const handleDrawer = () => {
    setDrawer(!open)
  }

  return pug`
    Div.root
      Div.left
        Div.top
          Div.logo(styleName=[{ hidden:!open }])
            Logo
          Div.menuIcon
            if !open
              TouchableOpacity(onPress=handleDrawer)
                Icon.bars(styleName=[{ hidden:!open }] size='xl' icon=faBars)
        Div.menuSmall
          Div.mobileMenu(styleName=[{ visible:open }])
            MobileMenu(open=open menuItems=menuItems handleDrawer=handleDrawer)
        Div.menuBig
          DesktopMenu(menuItems=menuItems)
      Div.right
        Profile
  `
}

export default Header
