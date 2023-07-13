import Head from 'next/head'
import React, { FC } from 'react'

type MetaProps = {
  title: string
  description: string
}
const Meta: FC<MetaProps> = (props) => {
  const { title, description } = props
  return (
    <Head>
      <title>{`${title} - SeiyaCode`}</title>
      <meta property='title' content={title} />
      <meta property='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default Meta
