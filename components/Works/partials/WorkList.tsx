import { Grid } from '@chakra-ui/react'
import React from 'react'
import WorkCard from './WorkCard'

const WorkList = () => {
  return (
    <Grid gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} gridGap={12} mt={14}>
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </Grid>
  )
}

export default WorkList
