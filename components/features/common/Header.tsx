'use client'

import { Image } from '@/components/libs/Image'
import {
  Text,
  Box,
  Container,
  Flex,
  Heading,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Link from 'next/link'

export const Header = () => {
  return (
    <Box as={"header"} px={4} bgColor='gray.50' >
      <Container maxW='container.sm'>
        <Flex py='3' justifyContent='space-between' alignItems='center'>
          <Link href='/'>
            <Heading as='h1' fontSize='2xl' cursor='pointer'>
              Seiya
              <Text as='span' color='green.600'>
                C
              </Text>
              ode
            </Heading>
          </Link>
          <ChakraLink href='https://github.com/Seiya-Tagami' title="seiya's github" isExternal>
            <Image src={'github-mark.svg'} alt="github-mark" width={8} height={8} />
          </ChakraLink>
        </Flex>
      </Container>
    </Box>
  )
}
