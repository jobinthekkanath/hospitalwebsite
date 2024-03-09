import React from 'react'
import Carosal from '../Carosal/Carosal'
import Schedule from '../Schedule/Schedule'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import Emergency from '../Emergency/Emergency'
import CleanlinessRules from '../CleanlinessRules/CleanlinessRules'
import Services from '../Services/Services'
import Price from '../Price/Price'
import News from '../News/News'
import Logos from '../Logos/Logos'
import Appointment from '../Appointment/Appointment'
import NewsLetter from '../NewsLetter/NewsLetter'

function Home() {
  return (
    <main>
        <Carosal/>
        <Schedule/>
        <WhoWeAre/>
        <Emergency/>
        <CleanlinessRules/>
        <Services/>
        <Price/>
        <News/>
        <Logos/>
        <Appointment/>
        <NewsLetter/>
    </main>
  )
}

export default Home
