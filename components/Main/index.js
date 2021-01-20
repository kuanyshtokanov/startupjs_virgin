import React from 'react'
import { Div } from '@startupjs/ui'

import './index.styl'
import SuggestionForm from '../SuggestionForm'
import SideInfo from '../SideInfo'
import Tabs from '../Tabs'
import Suggestions from '../Suggestions'

const Main = () => {

  const suggestions = [
    {
      id: 15,
      title: 'Classes',
      authorName: 'Rebecca La Malfa',
      date: 'over 3 years ago',
      text: 'I think it would be amazing to offer Excel and offer computer refresher classes',
      vote: 6,
      comments: [
        {
          id: 1,
          avatar: "avatar1.jpg",
          authorName: "Rebecca La Malfa",
          text: "Corey I will bake you what ever you want!!",
          date: "over 3 years ago"
        },
        {
          id: 2,
          avatar: "avatar2.jpg",
          authorName: "Cllo Knowles",
          text: "Hi Rebecca, Great suggestion! We can definetely make this happen. We'll update you with further details... Thanks!",
          date: "over 3 years ago"
        },
        {
          id: 3,
          avatar: "avatar3.jpg",
          authorName: "Corey Hartmann",
          text: "I'm willing to trade tutoring sessions for baked goods",
          date: "over 3 years ago"
        },
      ]
    },
    {
      id: 14,
      title: 'Virgin hotel holiday cookie swap',
      authorName: 'Rebecca La Malfa',
      date: 'over 3 years ago',
      text: 'Would anyone be interested in participating?',
      vote: 5,
      comments: []
    },
    {
      id: 13,
      title: 'beverage station light',
      authorName: 'Candice Jackson',
      date: 'about 4 years ago',
      text: 'The light on the beverage station seems to be left on at all times. I am guessing this is true due to the fact that guest call at least 4 times.',
      vote: 0,
      comments: []
    },
  ]

  return pug`
    Div.root
      Div.left
        SuggestionForm
        Tabs
          Suggestions(suggestions=suggestions)
      Div.right
        SideInfo
  `
}

export default Main