import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import About from './partials/About'
import Skills from './partials/Skills'
import Hero from 'components/common/Hero'

const Home: FC<any> = (props) => {
  const { } = props;
  return (
    <Container maxW='container.md' pt='20'>
      <Hero hero={{
        title: 'Welcome to SeiyaCode',
        thumbnail: '/heros/home.jpg'
      }} />
      <About />
      <Skills />
    </Container>
  )
}

export default Home
