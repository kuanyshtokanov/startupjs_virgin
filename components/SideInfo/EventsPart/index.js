import React, { useState } from 'react'
import { Div } from '@startupjs/ui'

import './index.styl'
import TeammateEvents from './TeammateEvents'
import HotelEvents from './HotelEvents'

const EventsPart = () => {

  return pug`
    Div.root
      TeammateEvents
      HotelEvents
  `
}

export default EventsPart