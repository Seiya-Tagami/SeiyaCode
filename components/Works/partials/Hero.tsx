import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <Box w='full' h={['240px', '300px']} position='relative'>
      <Image
        src='/works-hero.jpg'
        alt='works'
        fill={true}
        style={{ objectFit: 'cover' }}
        priority
      />
      <Flex
        w='full'
        h='full'
        bg='gray.300'
        opacity='0.5'
        justify='center'
        align='center'
        pos='absolute'
      >
        <Heading as='h2' fontSize='4xl'>
          Works
        </Heading>
      </Flex>
    </Box>
  )
}

export default Hero
