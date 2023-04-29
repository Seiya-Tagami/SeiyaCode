import { Box } from '@chakra-ui/react'
import React, { FC } from 'react'
import PostsPerMonth from './PostsPerMonth'

type PostsListProps = {
  posts:
  {
    month: string,
    articles:
    {
      id: string
      title: string
      page: string
      url: string
    }[]
  }[]
}
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
