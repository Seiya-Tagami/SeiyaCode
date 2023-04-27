import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Card, Link } from '@chakra-ui/react'
import React from 'react'

const Post = () => {
  return (
    <Card w='full' p='6'>
      <Link color='teal.500' href="#" isExternal>
        xxxxxxxxxxxxxxxxxxxxxxxxxxx
        <ExternalLinkIcon mx='2px' />
      </Link>
    </Card>
  )
}

export default Post