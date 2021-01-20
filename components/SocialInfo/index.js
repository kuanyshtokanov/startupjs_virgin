import React from 'react'
import { View } from 'react-native'
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
      Link
        Icon.icon(size='xl' icon=faFacebook)
      Link
        Icon.icon(size='xl' icon=faInstagram)
      Link
        Icon.icon(size='xl' icon=faLinkedin)
      Link
        Icon.icon.last(size='xl' icon=faTwitter)
  `
}

export default SocialInfo
