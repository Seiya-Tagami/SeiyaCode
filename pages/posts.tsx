import { motion } from 'framer-motion'
import React from 'react'
import PostsContainer from 'components/Posts/posts.container'
import Footer from 'components/common/Footer'
import Header from 'components/common/Header'

const Works = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.4 }}
      >
        <PostsContainer />
      </motion.div>
      <Footer />
    </>
  )
}

export default Works
