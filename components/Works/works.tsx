import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import Hero from './partials/Hero'
import WorkList from './partials/WorkList'

const Works: FC<any> = (props) => {
  const { } = props
  return (
    <>
      <Container maxW='container.md' pt='24'>
        <Hero />
        <WorkList />
      </Container>
    </>
  )
}

export default Works
