import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import Hero from 'components/common/Hero'

type HobbyData = {
  data: {
    hero: {
      title: string
      thumbnail: string
    }
  }
}
const Hobby: FC<HobbyData> = (props) => {
  const { data } = props;
  return (
    <Container maxW='container.md' pt='20'>
      <Hero hero={data.hero} />
    </Container>
  )
}

export default Hobby