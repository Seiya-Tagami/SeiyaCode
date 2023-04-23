import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'

type HeroProps = {
  data: {
    title: string
    thumbnail: string
  }
}

const Hero: FC<HeroProps> = (props) => {
  const { data } = props

  return (
    <Box w='full' h={['240px', '300px']} position='relative'>
      <Image
        src={data.thumbnail}
        alt={data.title}
        fill={true}
        style={{ objectFit: 'cover' }}
        priority
      />
      <Flex
        w='full'
        h='full'
        bg='rgba(255,255,255, 0.3)'
        justify='center'
        align='center'
        pos='absolute'
      >
        <Heading as='h2' color='black' fontSize='4xl'>
          {data.title}
        </Heading>
      </Flex>
    </Box>
  )
}

export default Hero
