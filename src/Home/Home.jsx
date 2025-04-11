import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../Components/Header'
import Bgimg from '../Pages/Bgimg'
import FirstPg from '../Pages/FisrtPg'
import Footer from '../Components/Footer'
import Properties from '../Pages/Properties'
import Projects from '../Pages/Projects'
import Agenciese from '../Pages/Agenciese'
import Developers from '../Pages/Developers'
import Header1 from '../Components/Header1'

function Home() {
  return (
    <div>
        <Routes>
        <Route
          path="/"
          element={
            <>
            <Header1/>
              {/* <Header /> */}
              <Bgimg />
              <FirstPg />
              <Footer />
            </>
          }
        />
        <Route path='/properties'element={<Properties/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/agenciese' element={<Agenciese/>}/>
        <Route path='/developers' element={<Developers/>}/>
        </Routes>
      
    </div>
  )
}

export default Home
