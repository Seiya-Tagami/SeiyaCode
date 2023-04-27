import React, { FC } from 'react'
import Hero from 'components/common/Hero'

type PostsData = {
  data: {
    hero: {
      title: string
      thumbnail: string
    }
  }
}
const Posts: FC<PostsData> = (props) => {
  const { data } = props
  return (
    <>
      <Hero hero={data.hero} />
    </>
  )
}

export default Posts
