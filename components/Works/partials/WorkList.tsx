import { Grid } from '@chakra-ui/react'
import React, { FC } from 'react'
import WorkCard from './WorkCard'

type WorkListProps = {
  data: {
    id: string
    title: string
    span: string
    desc: string
    stacks: string
    img_path: string
    product_url: string
  }[]
}

const WorkList: FC<WorkListProps> = (props) => {
  const { data } = props
  return (
    <Grid gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gridGap={10} mt={20}>
      {data.map((d) => (
        <WorkCard data={d} key={d.id} />
      ))}
    </Grid>
  )
}

export default WorkList
