import { Container } from '@chakra-ui/react'
import React, { FC } from 'react'
import PostsList from './partials/PostsList'
import Hero from 'components/common/Hero'

type PostsData = {
  data: {
    hero: {
      title: string
      thumbnail: string
    },
    posts:
    {
      month: string
      articles:
      {
        id: string
        title: string
        page: string
        url: string
      }[]
    }[]
  }
}
const Posts: FC<PostsData> = (props) => {
  const { data } = props
  return (
    <Container maxW='container.md' pt='20'>
      <Hero hero={data.hero} />
      <PostsList posts={data.posts} />
    </Container>
  )
}

export default Posts
