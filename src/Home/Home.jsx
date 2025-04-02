import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../Components/Header'
import Bgimg from '../Pages/Bgimg'
import FirstPg from '../Pages/FisrtPg'
import Footer from '../Components/Footer'
import Properties from '../Pages/Properties'

function Home() {
  return (
    <div>
        <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Bgimg />
              <FirstPg />
              <Footer />
            </>
          }
        />
        <Route path='/properties'element={<Properties/>}/>
        </Routes>
      
    </div>
  )
}

export default Home
