import React from 'react'
import { observer } from 'startupjs'
import { Menu, Link } from '@startupjs/ui'

import './index.styl'
import Logo from '../../Logo'

const DesktopMenu = () => {
  return pug`
    Menu.root
      Link(to='#').menuItem Valentines
      Link(to='#').menuItem Vopeeps
      Link(to='#').menuItem Voprep
      Link(to='#').menuItem Bare it
      Link(to='#').menuItem Culture
      Link(to='#').menuItem Tribe
      Link(to='#').menuItem Resources
      Link(to='#').menuItem Vowell
        
  `
}

export default DesktopMenu