import { format1, format2, sortByDate } from '@/components/libs/dayjs'
import { Badge, Box, Card, CardBody, Heading, Link, List, ListItem, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

export type TRecentActivity = {
  activity_id: number
  description: string
  category: string
  related_url: string
  created_at: string
  start_date: string
  end_date: string | null
}

type RecentActivityProps = {
  content: TRecentActivity[]
}

const categoryColorMap: { [key: string]: string } = {
  'tech event': 'green',
  internship: 'blue',
}

export const RecentActivity: FC<RecentActivityProps> = (props) => {
  const { content } = props

  return (
    <Box mt={10}>
      <Heading as='h2' fontSize='2xl'>
        🛠️最近の活動
      </Heading>
      <Card size={'md'} mt={8} bg={'gray.100'}>
        <CardBody>
          <List display={'flex'} flexDirection={'column'} gap={2}>
            {content.length
              ? sortByDate<TRecentActivity>(content).map((item, index) => (
                  <ListItem key={index}>
                    <Badge colorScheme={categoryColorMap[item.category]} mr={2} variant={'solid'}>
                      {item.category}
                    </Badge>
                    {item.related_url ? (
                      <Link href={item.related_url} isExternal fontSize={'sm'} color={'purple.500'}>
                        {item.description} ({format1(item.start_date)})
                      </Link>
                    ) : (
                      <Text as={'span'} fontSize={'sm'}>
                        {item.description} ({format1(item.start_date)}~
                        {item.end_date && format2(item.end_date)})
                      </Text>
                    )}
                  </ListItem>
                ))
              : 'Sorry... No data fetched'}
          </List>
        </CardBody>
      </Card>
    </Box>
  )
}
