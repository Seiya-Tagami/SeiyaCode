import React from 'react'
import { HOME_DATA } from './data'
import Home from './home'

const HomeContainer = () => {
  return <Home hero={HOME_DATA.hero} history={HOME_DATA.history} skills={HOME_DATA.skills} />
}

export default HomeContainer
