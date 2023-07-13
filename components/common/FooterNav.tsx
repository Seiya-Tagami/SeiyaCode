import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import React from 'react'

const FooterNav = () => {
  return (
    <Breadcrumb separator='-' color='teal.500' ml='auto' p={6} w='fit-content'>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='/works'>Works</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='/posts'>Posts</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default FooterNav
