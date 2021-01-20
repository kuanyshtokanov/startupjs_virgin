import React from 'react'
import { Div, Span, Icon } from '@startupjs/ui'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const Event = ({
  weekDay,
  month,
  day,
  title,
  location,
  time,
  last
}) => {
  return pug`
    Div.root
      Div.wrapper
        Div.left
          Span.weekDay #{weekDay}
          Span.month #{month}
          Span.day #{day}
        Div.center
          Span.title #{title}
          Span.location #{location}
          Span.time #{time}
        Div.right
          Icon.icon( icon=faChevronDown size='xl' )
      Div.line(styleName=[{ last }])
  `
}

export default Event
