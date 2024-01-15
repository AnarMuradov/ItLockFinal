import React from 'react'
import BestSolutionSection from '../../components/HomeSections/BestSolutionSection'
import FetchSection from '../../components/HomeSections/FetchSection'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (

    
    <>
    <Helmet>
    <title>Home page</title>
    </Helmet>
    <main>
      <BestSolutionSection/>
      <FetchSection/>
    </main>
    </>
  )
}

export default Home