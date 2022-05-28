import React from 'react'
import { NavbarUser } from '../../Components'
import WhyUs from './LandingPage/WhyUs'
import Swiper from './LandingPage/Swipper'
import {ServiceUp, ServiceDown} from './LandingPage/Service'
import FAQ from './LandingPage/FQA'
import ChartPie from './LandingPage/Chart'
import Footer from './LandingPage/Footer'
import Header from './LandingPage/Header'

const Home = () => {
  return (
    <>
      <NavbarUser />
      <Header />
      <ServiceUp />
      <WhyUs />
      <Swiper/>
      <ServiceDown />
      <ChartPie />
      <FAQ />
      <Footer/>
    </>
  )
}

export default Home