import Head from 'next/head'
import HomeContainer from 'components/Home/home.container'
import Header from 'components/common/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>SeiyaCode</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <HomeContainer />
    </>
  )
}
