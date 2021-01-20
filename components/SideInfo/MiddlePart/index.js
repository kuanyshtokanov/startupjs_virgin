import React, { useState } from 'react'
import { faBookOpen, faMap, faComment } from '@fortawesome/free-solid-svg-icons'
import { Div, H3, Icon, Span } from '@startupjs/ui'

import './index.styl'

const MiddlePart = () => {

  return pug`
    Div.root
      Div.item
        Icon.icon( icon=faBookOpen size='xl' )
        Span.text book of love
      Div.item
        Icon.icon( icon=faMap size='xl' )
        Span.text culture map
      Div.item
        Icon.icon( icon=faComment size='xl' )
        Span.text send feedback
  `
}

export default MiddlePart