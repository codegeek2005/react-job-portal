import React from 'react'

import Hero from '../components/Hero.jsx'
import HomeCards from '../components/HomeCards.jsx'
import Joblisitings from '../components/Joblistings.jsx'
import ViewAllJobs from '../components/ViewAllJobs.jsx'


const HomePage = () => {
  return (
    <>
      
    <Hero />
    <HomeCards />
    <Joblisitings isHome = {true} />
    <ViewAllJobs />

    </>
  )
}

export default HomePage
