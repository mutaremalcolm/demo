import React from 'react'
import { Header } from '../components/Header/Header'

const blog = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8">
      <Header
          title="This is the Blog Page"
          subtitle="All the latest materials on react will appear here"
        />
        </main>
    </>
  )
}

export default blog