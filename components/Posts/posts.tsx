import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import { Hero, FooterNav } from "../common/"
import { PostsList } from './partials'
import { PostsData } from './types'


const Posts: FC<PostsData> = (props) => {
  const { hero, posts } = props
  return (
    <Container maxW='container.md' pt='20'>
      <Hero hero={hero} />
      <PostsList posts={posts} />
      <FooterNav />
    </Container>
  )
}

export default Posts
