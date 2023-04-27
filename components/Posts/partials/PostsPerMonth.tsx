import { Box, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Post from './Post'

const PostsPerMonth = () => {
  return (
    <Box>
      <Heading as='h2' fontSize='2xl'>
        2023/05
      </Heading>
      <VStack w='full' mt='4'>
        <Post />
        <Post />
        <Post />
      </VStack>
    </Box>
  )
}

export default PostsPerMonth