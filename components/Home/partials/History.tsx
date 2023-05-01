import { CheckCircleIcon, SpinnerIcon } from '@chakra-ui/icons'
import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'


const History = () => {
  return (
    <Box mt={12}>
      <Heading as='h2' fontSize='2xl'>
        What I have done
        <Box bg={'gray.300'} w={52} h={1}></Box>
      </Heading>
      <List spacing={3} mt={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          2022年4月、早稲田大学法学部に入学
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          2022年6月、サークルに所属し、プログラミングと出会う
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          2022年12月、HTML, CSS, JavaScript, PHPの基礎を習得
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          2023年3月、もっとレベルアップをするため、エンジニア長期インターンに応募
        </ListItem>
        <ListItem>
          <ListIcon as={SpinnerIcon} color='green.500' />
          現在、Next.js、Nest.js, GraphQLを用いた、モダンな開発に挑戦中
        </ListItem>
      </List>
    </Box>
  )
}

export default History