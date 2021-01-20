import React, { useState } from 'react'
import { Image, TouchableOpacity, Text } from 'react-native'
import { Div, Drawer, Link, Menu, Button, Icon } from '@startupjs/ui'
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
          Link.item Valentines
          Link.item
            Text.item V
            Icon.item(icon=faHeart)
            Text.item peeps
          Link.item
            Text.item V
            Icon.item(icon=faHeart)
            Text.item prep
          Link.item Bare it
          Link.item Culture
          Link.item Tribe
          Link.item Resources
          Link.item Vowell
        SocialInfo
        Div.avatar
          Profile
      

      
  `
}

export default MobileMenu