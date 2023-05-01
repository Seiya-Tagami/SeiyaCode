import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import Hero from '../common/Hero'
import WorkList from './partials/WorkList'
import { WorksData } from './types'
import FooterNav from 'components/common/FooterNav'

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
