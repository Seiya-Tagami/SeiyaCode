import React from 'react'
import { WORKS_DATA } from './data'
import Works from './works'

const WorksContainer = () => {
  return <Works hero={WORKS_DATA.hero} works={WORKS_DATA.works} />
}

export default WorksContainer
