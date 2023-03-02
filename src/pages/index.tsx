import type { NextPage } from 'next'
import Banner from '@/components/Banner'
import Blog from '@/components/Blog'
import Collections from '@/components/Collections'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Header />
      <Collections />
      <Blog />
      <Footer />
    </>
  )
}

export default Home
