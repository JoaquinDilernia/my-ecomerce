import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'
import Principal from './components/Principal';

const App = () => {

  return (
<>
 <ChakraProvider>
  
  <NavBar />
  <ItemListContainer />

 </ChakraProvider>
</>
)
}

export default App
