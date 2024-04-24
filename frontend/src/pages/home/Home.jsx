import React from 'react'
import Sidebar from '../../components/Sidebar'
import Conversation from '../../components/Conversation'

const Home = () => {
  return (
    <div className="flex sm:h-[450px] bg-gray-400 bg-clip-padding bg-opacity-0 backdrop-filter backdrop-blur-3xl rounded-lg shadow-lg md:h-[550px] justify-between items-center p-4 min-w-96">
        <Sidebar/>
        <Conversation/>
    </div>
  )
}

export default Home