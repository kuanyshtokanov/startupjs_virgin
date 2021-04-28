import React from 'react'
import { Div, Span } from '@startupjs/ui'
import Event from './Event'
import './index.styl'

const HotelEvents = () => {
  return pug`
    Div.root
      Span.title1 HOTEL
      Span.title2 EVENTS
      Div.line
      Event(
        img='pic1.jpeg'
        title='upside down tea party'
        location='commons club'
        date='March 09, 2020 at 2:00PM'
      )
      Event(
        img='/pic2.jpeg'
        title="sky high st. patty's day"
        location='cerise'
        date='March 14, 2020 at 9:00AM'
      )
      Event(
        img='/pic3.jpeg'
        title="st.patrick's day takeover"
        location='fdr'
        date='March 14, 2020 at 9:00AM'
      )
  `
}

export default HotelEvents