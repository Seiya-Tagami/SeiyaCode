import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Hero, FooterNav } from "../common"
import { WorkList } from './partials'
import { WorksData } from './types'

const Works: FC<WorksData> = (props) => {
  const { hero, works } = props
  return (
    <>
      <Container maxW='container.md' pt='20'>
        <Hero hero={hero} />
        <WorkList works={works} />
        <FooterNav />
      </Container>
    </>
  )
}

export default Works
