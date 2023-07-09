'use client'

import { Container } from "@chakra-ui/react"
import { About, History } from "./partials"

export const Top = () => {
  return (
    <Container maxW='container.sm' px={6}>
      <About />
      <History />
    </Container>
  )
}