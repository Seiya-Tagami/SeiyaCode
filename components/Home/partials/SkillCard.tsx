import { Box, Card, CardBody, CardHeader, Heading, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC } from 'react'
import { TSkill } from '../types'

type SkillCardProps = TSkill
const SkillCard: FC<SkillCardProps> = (props) => {
  const { title, imgPath, alt } = props
  return (
    <Card key={title} w={['90%', 'auto']} mx={'auto'}>
      <CardHeader>
        <Heading size='md' maxW='180'>
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Box pos='relative' w='180px' h='160px' mx='auto'>
          <Image src={imgPath} alt={alt} fill sizes='100%' />
        </Box>
      </CardBody>
    </Card>
  )
}

export default SkillCard
