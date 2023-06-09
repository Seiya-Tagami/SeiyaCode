import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { FC } from 'react'
import { HomeData } from '../types'
import SkillCard from './SkillCard'

type SkillsProps = Omit<HomeData, 'hero' | 'history'>
const Skills: FC<SkillsProps> = (props) => {
  const { skills } = props
  return (
    <Box mt={12}>
      <Heading as='h2' fontSize='2xl'>
        Skills
        <Box bg={'gray.300'} w={16} h={1}></Box>
      </Heading>
      <SimpleGrid mt={8} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {skills.map((skill) => (
          <SkillCard
            title={skill.title}
            imgPath={skill.imgPath}
            alt={skill.alt}
            key={skill.title}
          />
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Skills
