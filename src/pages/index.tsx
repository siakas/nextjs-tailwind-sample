import type { NextPage } from 'next'
import Head from 'next/head'
import NotComponents from '@/components/not-components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not Tailwind CSS | Code Hike Demo</title>
      </Head>

      <main className="min-h-screen bg-slate-900 text-slate-400 antialiased">
        <NotComponents />
      </main>
    </>
  )
}

export default Home
