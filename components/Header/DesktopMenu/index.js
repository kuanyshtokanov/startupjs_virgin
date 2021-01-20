import React from 'react'
import { observer } from 'startupjs'
import { Menu, Link } from '@startupjs/ui'

import './index.styl'
import Logo from '../../Logo'

const DesktopMenu = () => {
  return pug`
    Menu.root
      Link.menuItem Valentines
      Link.menuItem Vopeeps
      Link.menuItem Voprep
      Link.menuItem Bare it
      Link.menuItem Culture
      Link.menuItem Tribe
      Link.menuItem Resources
      Link.menuItem Vowell
        
  `
}

export default DesktopMenu