import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import About from './partials/About'
import Skills from './partials/Skills'
import { HomeData } from './types'
import Hero from 'components/common/Hero'

const Home: FC<HomeData> = (props) => {
  const { hero } = props
  return (
    <Container maxW='container.md' pt='20'>
      <Hero hero={hero} />
      <About />
      <Skills />
    </Container>
  )
}

export default Home
