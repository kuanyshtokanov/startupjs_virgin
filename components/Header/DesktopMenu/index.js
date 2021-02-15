import React from 'react'
import { Text } from 'react-native'
import { Menu, Link, Icon, Row } from '@startupjs/ui'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import './index.styl'

const DesktopMenu = ({ menuItems }) => {
  return pug`
    Menu.root
      each item, index in menuItems
        case item
          when 'PREP'
            Link(key=index to='#')
              Row.linkItem
                Text.item V
                Icon.icon(icon=faHeart)
                Text.item=item
          when 'PEEPS'
            Link(key=index to='#')
              Row.linkItem
                Text.item V
                Icon.icon(icon=faHeart)
                Text.item=item
          default
            Link(key=index to='#').menuItem=item
        
  `
}

export default DesktopMenu
