import { Box, Card, CardBody, CardHeader, Heading, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <Box mt={12}>
      <Heading as='h2' fontSize='2xl' textDecorationLine='underline'>
        Skills
      </Heading>
      <SimpleGrid mt={8} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <Card>
          <CardHeader>
            <Heading size='md'>Now learning</Heading>
          </CardHeader>
          <CardBody>
            <Box pos='relative' w='180px' h='160px' mx='auto'>
              <Image src='https://skillicons.dev/icons?i=nextjs,ts,nestjs,graphql,prisma&perline=3' alt='nowLearning' fill sizes='200px' />
            </Box>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>Daily uses</Heading>
          </CardHeader>
          <CardBody>
            <Box pos='relative' w='180px' h='160px' mx='auto'>
              <Image src='https://skillicons.dev/icons?i=html,css,tailwind,js,nodejs,linux&perline=3' alt='dailyUses' fill sizes='100%' />
            </Box>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>I have learned once</Heading>
          </CardHeader>
          <CardBody h='200px'>
            <Box pos='relative' w='180px' h='160px' mx='auto'>
              <Image src='https://skillicons.dev/icons?i=php,vue,express,sass,firebase,mongodb,mysql&perline=3' alt='onceIHaveUsed' fill sizes='100%' />
            </Box>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>I want to learn in the future</Heading>
          </CardHeader>
          <CardBody h='200px'>
            <Box pos='relative' w='180px' h='160px' mx='auto'>
              <Image src='https://skillicons.dev/icons?i=rust,flutter,django,dotnet,postgres,aws,azure&perline=3' alt='onceIHaveUsed' fill sizes='100%' />
            </Box>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Heading size='md'>Tools</Heading>
          </CardHeader>
          <CardBody>
            <Box pos='relative' w='180px' h='160px' mx='auto'>
              <Image src='https://skillicons.dev/icons?i=git,github,vscode,vite,docker,apollo,vercel,figma&perline=3' alt='tools' fill sizes='100%' />
            </Box>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  )
}

export default Skills
