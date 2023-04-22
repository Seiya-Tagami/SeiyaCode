import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Text,
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <Box px={4} bgColor='gray.200' position='fixed' top='0' right='0' left='0' zIndex='1000'>
      <Container maxW='container.md'>
        <Flex as='header' py='4' justifyContent='space-between' alignItems='center'>
          <Link href='/' passHref>
            <Heading as='h1' fontSize='2xl' cursor='pointer'>
              Seiya<Text as='span' color='green.600'>C</Text>ode
            </Heading>
          </Link>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
              outlineColor='gray.300'
            />
            <MenuList>
              <Link href='/'>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link href='/Works'>
                <MenuItem>Works</MenuItem>
              </Link>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File...</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Container>
    </Box >
  )
}

export default Header
