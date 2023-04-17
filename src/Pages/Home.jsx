import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import Trending from './Trending'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <div  className='flex flex-wrap'>
        <Sidebar/>
     
        <Main/>

        </div>
     
    </div>
  )
}

export default Home