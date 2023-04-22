import { Container } from '@chakra-ui/react';
import React, { FC } from 'react'
import Hero from './partials/Hero';

const Works: FC<any> = (props) => {
  const { } = props;
  return (
    <>
      <Container maxW='container.md' pt='24'>
        <Hero />
      </Container>
    </>
  )
}

export default Works