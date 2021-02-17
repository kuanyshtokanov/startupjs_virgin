import React from 'react'
import { Div } from '@startupjs/ui'

import DesktopMenu from './DesktopMenu'
import Logo from '../Logo'
import Profile from '../Profile'
import './index.styl'

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

const Header = () => {
  return pug`
    Div.root
      Div.left
        Div.top
          Div.logo
            Logo
        Div.menuBig
          DesktopMenu(menuItems=menuItems)
      Div.right
        Profile
  `
}

export default Header
