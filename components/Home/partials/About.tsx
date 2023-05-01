import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <Box mt={12}>
      <Heading as='h2' fontSize='2xl' textDecorationLine='underline'>
        About
      </Heading>
      <Flex
        width='90%'
        mx='auto'
        mt='6'
        justify='space-between'
        align='center'
        direction={['column', 'row']}
      >
        <Box width={[200, 240]} height={[200, 240]} rounded='full' overflow='hidden' pos='relative'>
          <Image src='/about.png' alt='自画像' fill sizes='100%' />
        </Box>
        <Box py={[8, 12]}>
          <Text fontSize='2xl'>田上誠也 | Seiya TAGAMI</Text>
          <Text>早稲田大学法学部2年 19歳</Text>
          <Text>某IT企業エンジニアインターン生</Text>
          <Flex gap={2} color='rebeccapurple'>
            <Link>#Next.js</Link>
            <Link>#Graph QL</Link>
            <Link>#Nest.js</Link>
          </Flex>
          <Text mt='6'>今日も１日がんばるぞい{'＼(-o-)／'}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default About
