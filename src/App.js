import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import NewsLetter from './components/NewsLetter'
import Cards from './components/Cards'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Cards/>
    </div>
  )
}

export default App