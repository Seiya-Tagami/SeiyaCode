import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Card, Flex, GridItem, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'

const WorkCard = () => {
  return (
    <GridItem w='90%' mx='auto'>
      <Card w='full' h={200} bg='gray.500'></Card>
      <Flex direction='column' gap='1.5' p='1.5'>
        <Flex justify='space-between' align='center'>
          <Heading as='h3' size='md'>
            title
          </Heading>
          <Text>制作期間 2022/03~04</Text>
        </Flex>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui vel in eius beatae provident
          perspiciatis ad incidunt itaque harum corporis commodi pariatur suscipit saepe aut, facere
          eos quae amet enim!
        </Text>
        <Link color='teal.500' ml='auto' href='https://www.google.com/' isExternal>
          Check the product
          <ExternalLinkIcon mx='2px' />
        </Link>
        <Link color='teal.500' ml='auto' href='https://www.google.com/' isExternal>
          Go to github repository
          <ExternalLinkIcon mx='2px' />
        </Link>
      </Flex>
    </GridItem>
  )
}

export default WorkCard
