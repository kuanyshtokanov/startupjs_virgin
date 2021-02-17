import React from 'react'
import { Link, Icon, Div } from '@startupjs/ui'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import './index.styl'

const SocialInfo = () => {
  return pug`
    Div.container
      Link(to='#')
        Icon.icon(size='l' icon=faFacebook)
      Link(to='#')
        Icon.icon(size='l' icon=faInstagram)
      Link(to='#')
        Icon.icon(size='l' icon=faLinkedin)
      Link(to='#')
        Icon.icon.last(size='l' icon=faTwitter)
  `
}

export default SocialInfo
