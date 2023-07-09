'use client'

import { Image } from '@/components/libs/Image'
import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const About = () => {
  return (
    <Box mt={12}>
      <VStack>
        <Image src='/top/about.png' width={160} height={160} alt='自画像' roundedTopLeft={'2xl'} roundedBottomRight={'2xl'} />
        <Box py={8}>
          <Text as={'b'} fontSize='2xl'>田上誠也 | Seiya TAGAMI</Text>
          <Text>早稲田大学法学部2年 (19歳)</Text>
          <Text mt={2}>品川でJavaScript書いたり、弊学の課題に追われたり、CSの勉強したりと、絶賛忙しい生活を送っています。 <br />
          </Text>
          <Flex gap={2} color='rebeccapurple'>
            <Link href='https://nextjs.org/' isExternal>#Next.js</Link>
            <Link href='https://go.dev/' isExternal>#Go</Link>
            <Link href='https://nodejs.org/ja' isExternal>#Node.js</Link>
          </Flex>
          <Text mt='6'>今日も１日{'＼(-o-)／'}</Text>
        </Box>
      </VStack>
    </Box>
  )
}
