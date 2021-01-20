
import React from 'react'
import { Div, Span, Avatar } from '@startupjs/ui'
import './index.styl'

const Profile = () => {
  return pug`
    Div.avatar
      Div.info
        Span.hello hello
        Span.name Niraj
      Avatar( size='xl' src='/avatar.jpg' )
  `
}

export default Profile