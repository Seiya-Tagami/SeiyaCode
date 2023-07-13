import { Box, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'
import { THero } from './types'

type HeroProps = {
  hero: THero
}

const Hero: FC<HeroProps> = (props) => {
  const { hero } = props

  return (
    <Box w='full' h={['240px', '300px']} position='relative'>
      <Image
        src={hero.thumbnail}
        alt={hero.title}
        fill={true}
        sizes='100%'
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
        <Heading as='h2' color='black' fontSize='4xl' bgGradient='linear(to-r, #4d2ea7, #000052)'
          bgClip='text'>
          {hero.title}
        </Heading>
      </Flex>
    </Box>
  )
}

export default Hero
