import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Div, Link, Menu, Icon, Span } from '@startupjs/ui'
import {
  faTimes,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import { BASE_URL } from '@env'

import Profile from '../../Profile'
import SocialInfo from '../../SocialInfo'
import './index.styl'

const MobileMenu = ({ open, menuItems, handleDrawer }) => {
  const base = BASE_URL

  return pug`
    Div.root
      if open
        TouchableOpacity(onPress=handleDrawer)
          Icon.delete(size='xl' icon=faTimes)
      Div.sidebar
        Image.img(source={ uri: base+'/main-logo-white.png' })
        Menu.menu
          Link(to='#').item Valentines
          Link(to='#').complexItem
            Span.item V
            Icon.item(icon=faHeart)
            Span.item peeps
          Link(to='#').complexItem
            Span.item V
            Icon.item(icon=faHeart)
            Span.item prep
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
