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

      <div className="my-9 flex justify-center gap-2">
        <div className="h-16 w-16 bg-maroon-50"></div>
        <div className="h-16 w-16 bg-maroon-100"></div>
        <div className="h-16 w-16 bg-maroon-200"></div>
        <div className="h-16 w-16 bg-maroon-300"></div>
        <div className="h-16 w-16 bg-maroon-400"></div>
        <div className="h-16 w-16 bg-maroon-500"></div>
        <div className="h-16 w-16 bg-maroon-600"></div>
        <div className="h-16 w-16 bg-maroon-700"></div>
        <div className="h-16 w-16 bg-maroon-800"></div>
        <div className="h-16 w-16 bg-maroon-900"></div>
      </div>

      <Collections />
      <Blog />
      <Footer />
    </>
  )
}

export default Home
