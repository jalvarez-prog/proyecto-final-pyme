import React from 'react'
import Slider from '../components/Slider'
import SearchBar from '../components/SearchBar'
import Container1 from '../components/Container1'
import Container2 from '../components/Container2'
import Container3 from '../components/Container3'
import Container4 from '../components/Container4'
import Cards from '../components/Cards'
import Thumbnail from '../components/Thumbnail'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home () {
  return (
    <div className='App'>
      <>
        <Slider />
      </>

      <SearchBar />
      <Container1 />
      <Container2 />
      <Cards />
      <Container3 />
      <Thumbnail />
      <Banner />
      <Container4 />
      <Footer /> 
    </div>
  )
}
