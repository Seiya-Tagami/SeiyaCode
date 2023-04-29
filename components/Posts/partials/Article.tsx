import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Card, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

type ArticleProps = {
  content: {
    id: string
    title: string
    page: string
    url: string
  }
}
const Article: FC<ArticleProps> = (props) => {
  const { content } = props;
  return (
    <Card w='full' p='6'>
      <Link display='flex' justifyContent={['space-between', 'flex-start']} gap={['0', '40px']} color='teal.500' href={content.url} isExternal>
        <Text as={'span'} bg={'green.400'} p={1} borderRadius={6} color='white' fontWeight='bold'>{content.page}</Text>
        <Text as={'span'}>
          {content.title}
          <ExternalLinkIcon mx='2px' />
        </Text>
      </Link>
    </Card>
  )
}

export default Article
