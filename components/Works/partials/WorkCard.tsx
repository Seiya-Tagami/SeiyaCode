import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Card, Flex, GridItem, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'

type WorkCardProps = {
  data: {
    id: string
    title: string
    span: string
    desc: string
    stacks: string
    img_path: string
    product_url: string
  }
}

const WorkCard: FC<WorkCardProps> = (props) => {
  const { data } = props
  return (
    <GridItem w='90%' mx='auto'>
      <Card w='full' h={200} overflow='hidden'>
        {data.img_path ? (
          <Image src={data.img_path} alt={data.title} fill={true} sizes='100%' priority />
        ) : (
          <Image
            src='/noImage.png'
            alt='noImage'
            fill={true}
            style={{ objectFit: 'cover' }}
            sizes='100%'
            priority
          />
        )}
      </Card>
      <Flex direction='column' gap='2' p='1.5'>
        <Flex justify='space-between' align='center'>
          <Heading as='h3' size='md'>
            {data.title}
          </Heading>
          <Text fontSize='sm'>制作期間 {data.span}</Text>
        </Flex>
        <Text fontSize='sm'>{data.desc}</Text>
        <Flex fontSize='sm' justify='space-between' color='purple.500'>
          <Text>技術スタック</Text>
          <Text>{data.stacks}</Text>
        </Flex>
        {data.product_url !== '#' ? (
          <Link color='teal.500' ml='auto' href={data.product_url} isExternal>
            Check the product
            <ExternalLinkIcon mx='2px' />
          </Link>
        ) : (
          ''
        )}
      </Flex>
    </GridItem>
  )
}

export default WorkCard
