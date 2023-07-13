import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react'
import React, { FC } from 'react'
import { HomeData } from '../types'

type HistoryProps = Omit<HomeData, 'hero' | 'skills'>
const History: FC<HistoryProps> = (props) => {
  const { history } = props
  return (
    <Box mt={12}>
      <Heading as='h2' fontSize='2xl'>
        What I have done
        <Box bg={'gray.300'} w={52} h={1}></Box>
      </Heading>
      <List spacing={3} mt={4}>
        {history.map((h) => (
          <ListItem key={h.date} display={'flex'} alignItems={'center'}>
            <ListIcon as={h.icon} color='green.500' />
            {h.date}、{h.text}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default History
