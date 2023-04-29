import { Grid } from '@chakra-ui/react'
import React, { FC } from 'react'
import { WorksData } from '../types'
import WorkCard from './WorkCard'

type WorkListProps = Omit<WorksData, 'hero'>
const WorkList: FC<WorkListProps> = (props) => {
  const { works } = props
  return (
    <Grid gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gridGap={10} mt={20}>
      {works.map((w) => (
        <WorkCard data={w} key={w.id} />
      ))}
    </Grid>
  )
}

export default WorkList
