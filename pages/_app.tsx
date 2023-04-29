import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
      <ChakraProvider>
        <Component key={router.asPath} {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  )
}
