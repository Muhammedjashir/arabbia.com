import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../Components/Header'
import Bgimg from '../Pages/Bgimg'
import FirstPg from '../Pages/FisrtPg'
import Footer from '../Components/Footer'

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
        </Routes>
      
    </div>
  )
}

export default Home
