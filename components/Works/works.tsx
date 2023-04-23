import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import Hero from '../common/Hero'
import WorkList from './partials/WorkList'

type WorksData = {
  data: {
    hero: {
      title: string
      thumbnail: string
    }
  }
}

const Works: FC<WorksData> = (props) => {
  const { data } = props
  return (
    <>
      <Container maxW='container.md' pt='20'>
        <Hero data={data.hero} />
        <WorkList />
      </Container>
    </>
  )
}

export default Works
