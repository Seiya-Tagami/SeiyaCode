import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import PostsList from './partials/PostsList'
import { PostsData } from './types'
import Hero from 'components/common/Hero'

const Posts: FC<PostsData> = (props) => {
  const { hero, posts } = props
  return (
    <Container maxW='container.md' pt='20'>
      <Hero hero={hero} />
      <PostsList posts={posts} />
    </Container>
  )
}

export default Posts
