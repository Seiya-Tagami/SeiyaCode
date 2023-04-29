import { Box, Heading, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { TPost } from '../types'
import Article from './Article'

type PostsPerMonthProps = {
  post: TPost
}
const PostsPerMonth: FC<PostsPerMonthProps> = (props) => {
  const { post } = props
  return (
    <Box>
      <Heading as='h2' fontSize='2xl'>
        {post.month}
      </Heading>
      <VStack w='full' mt='4'>
        {post.articles.map((a) => (
          <Article content={a} key={a.id} />
        ))}
      </VStack>
    </Box>
  )
}

export default PostsPerMonth
