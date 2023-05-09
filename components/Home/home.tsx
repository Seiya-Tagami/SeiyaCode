import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Hero, FooterNav } from "../common/"
import { About, History, Skills } from "./partials/index"
import { HomeData } from './types'

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
