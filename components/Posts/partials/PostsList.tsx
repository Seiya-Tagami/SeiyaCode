import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import PostsPerMonth from './PostsPerMonth'

const PostsList: FC<any> = (props) => {
  const {} = props
  return (
    <Box mt='4'>
      <PostsPerMonth />
    </Box>
  )
}

export default PostsList
