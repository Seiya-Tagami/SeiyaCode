import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Container maxW='container.md' h='500' position='relative'>
      <Heading as='h2' fontSize='2xl'>
        Works
      </Heading>
      {/* <Box w={'full'} h={'full'} position={"relative"}>
        <Image src="/works-hero.jpg" fill={true} alt='works' style={{ objectFit: "cover" }} />
      </Box>
      <Heading position='absolute' top={''}>Works</Heading> */}
    </Container>
  )
}

export default Hero
