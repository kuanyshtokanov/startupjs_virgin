import React from 'react'
import { Div } from '@startupjs/ui'

import Suggestion from './Suggestion'
import './index.styl'

const Suggestions = ({ suggestions }) => {
  return pug`
    Div.suggestions
      each suggestion, index in suggestions
        Suggestion( key=suggestion.id index=index id=suggestion.id ...suggestion )
  `
}

export default Suggestions
