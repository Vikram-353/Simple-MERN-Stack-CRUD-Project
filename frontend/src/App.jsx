import { Button , Box} from '@chakra-ui/react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from "./Pages/HomePage"
import CreatePage from './Pages/CreatePage'
import { useColorModeValue } from '@chakra-ui/react'



function App() {

  return (
    <>
     <Box minh={'100%'}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='create' element={<CreatePage/>} />
      </Routes>
     </Box>
    </>
  )
}

export default App
