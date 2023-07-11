import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  const now = new Date()
  return (
    <Flex align='center' justify='center' h={16} textAlign='center'>
      <Text as='small' fontSize='sm'>
        &copy; {now.getFullYear()} SeiyaCode
      </Text>
    </Flex>
  )
}
