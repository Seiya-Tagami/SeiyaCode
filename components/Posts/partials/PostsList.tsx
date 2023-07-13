import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import { PostsData } from '../types'
import PostsPerMonth from './PostsPerMonth'

type PostsListProps = Omit<PostsData, 'hero'>
const PostsList: FC<PostsListProps> = (props) => {
  const { posts } = props
  return (
    <Box mt='4'>
      {posts.map((post) => (
        <PostsPerMonth post={post} key={post.month} />
      ))}
    </Box>
  )
}

export default PostsList
