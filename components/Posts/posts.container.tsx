import React from 'react'
import { POSTS_DATA } from './data'
import Posts from './posts'

const PostsContainer = () => {
  return <Posts hero={POSTS_DATA.hero} posts={POSTS_DATA.posts} />
}

export default PostsContainer
