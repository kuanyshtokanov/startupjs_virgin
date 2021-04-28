import React from 'react'
import { Div } from '@startupjs/ui'

import './index.styl'
import TopPart from './TopPart'
import MiddlePart from './MiddlePart'
import EventsPart from './EventsPart'

const SideInfo = () => {
  return pug`
    Div.root
      TopPart
      MiddlePart
      EventsPart
  `
}

export default SideInfo