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
    works: {
      id: string
      title: string
      span: string
      desc: string
      stacks: string
      img_path: string
      product_url: string
    }[]
  }
}

const Works: FC<WorksData> = (props) => {
  const { data } = props
  return (
    <>
      <Container maxW='container.md' pt='20'>
        <Hero hero={data.hero} />
        <WorkList data={data.works} />
      </Container>
    </>
  )
}

export default Works
