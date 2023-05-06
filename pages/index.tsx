import { motion } from 'framer-motion'
import HomeContainer from 'components/Home/home.container'
import Footer from 'components/common/Footer'
import Header from 'components/common/Header'
import Meta from 'components/common/Meta'

export default function Home() {
  return (
    <>
      <Meta title='Home' description='This is home page.' />
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
      >
        <HomeContainer />
      </motion.div>
      <Footer />
    </>
  )
}
