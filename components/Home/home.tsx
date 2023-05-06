import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import About from './partials/About'
import History from './partials/History'
import Skills from './partials/Skills'
import { HomeData } from './types'
import FooterNav from 'components/common/FooterNav'
import Hero from 'components/common/Hero'



const Home: FC<HomeData> = (props) => {
  const { hero, skills, history } = props
  return (
    <Container maxW='container.md' pt='20'>
      <Hero hero={hero} />
      <About />
      <History history={history} />
      <Skills skills={skills} />
      <FooterNav />
    </Container>
  )
}

export default Home
