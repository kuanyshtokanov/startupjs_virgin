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
        Icon.icon.first(size='xxl' icon=faFacebook)
      Link(to='#')
        Icon.icon(size='xxl' icon=faInstagram)
      Link(to='#')
        Icon.icon(size='xxl' icon=faLinkedin)
      Link(to='#')
        Icon.icon(size='xxl' icon=faTwitter)
  `
}

export default SocialInfo
