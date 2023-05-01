import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import About from './partials/About'
import History from './partials/History'
import Skills from './partials/Skills'
import { HomeData } from './types'
import Hero from 'components/common/Hero'

const Home: FC<HomeData> = (props) => {
  const { hero, skills } = props
  return (
    <Container maxW='container.md' pt='20'>
      <Hero hero={hero} />
      <About />
      <History />
      <Skills skills={skills} />
    </Container>
  )
}

export default Home
