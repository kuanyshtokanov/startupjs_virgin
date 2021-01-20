import React from 'react'
import { Div, Span } from '@startupjs/ui'
import Event from './Event'
import './index.styl'

const TeammateEvents = () => {
  return pug`
    Div.root
      Span.title1 TEAMMATE
      Span.title2 EVENTS
      Div.line
      Event(
        weekDay='tue'
        month='mar'
        day='17'
        title='st patricks day celebration'
        location='fdr'
        time='12:00p-1:00p'
      )
      Event(
        weekDay='wed'
        month='mar'
        day='18'
        title='march madness at fdr'
        location='fdr'
        time='11:00a-2:00p'
        last
      )
      
  `
}

export default TeammateEvents