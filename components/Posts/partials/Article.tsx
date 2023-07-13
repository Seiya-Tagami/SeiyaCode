import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Card, Link, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import { TArticle } from '../types'

type ArticleProps = {
  content: TArticle
}
const Article: FC<ArticleProps> = (props) => {
  const { content } = props
  return (
    <Card w='full' p='6'>
      <Link
        display='flex'
        alignItems='center'
        gap={['28px', '40px']}
        color='teal.500'
        href={content.url}
        isExternal
      >
        <Badge bg='green.400' color='white' fontSize='16' p={1}>
          {content.media}
        </Badge>
        <Text as={'span'}>
          {content.title}
          <ExternalLinkIcon mx='2px' />
        </Text>
      </Link>
    </Card>
  )
}

export default Article
