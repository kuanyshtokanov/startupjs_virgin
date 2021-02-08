import React, { useState } from 'react'
import { Image, TouchableOpacity, Text } from 'react-native'
import { Div, Drawer, Link, Menu, Button, Icon, DrawerSidebar } from '@startupjs/ui'
import {
  faBars,
  faTimes,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

import Profile from '../../Profile'
import SocialInfo from '../../SocialInfo'
import './index.styl'

const MobileMenu = ({ open, handleDrawer }) => {

  return pug`
    Div.root
      if open
        TouchableOpacity(onPress=handleDrawer)
          Icon.delete(size='xl' icon=faTimes)
      Div.sidebar
        Image.img(source={ uri: 'main-logo-white.png' })
        Menu.menu
          Link(to='#').item Valentines
          Link(to='#').item
            Text.item V
            Icon.item(icon=faHeart)
            Text.item peeps
          Link(to='#').item
            Text.item V
            Icon.item(icon=faHeart)
            Text.item prep
          Link(to='#').item Bare it
          Link(to='#').item Culture
          Link(to='#').item Tribe
          Link(to='#').item Resources
          Link(to='#').item Vowell
        SocialInfo
        Div.avatar
          Profile
      

      
  `
}

export default MobileMenu