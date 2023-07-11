'use client'

import { Container } from '@chakra-ui/react'
import { About, History } from './partials'
import { FC } from 'react'

type TopProps = {
  content: {
    [val: string]: any
  }
}

export const Top: FC<TopProps> = (props) => {
  const { content } = props

  return (
    <Container maxW='container.sm' px={6}>
      {/* about me */}
      <About />

      {/* my recent activity */}

      {/* my history */}
      <History content={content.history} />

      {/* my favorite books */}
    </Container>
  )
}