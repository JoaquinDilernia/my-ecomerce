import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {

  const nombre= "CoderHouse";
  console.log(nombre);

  return (
    <>
<ChakraProvider>

<NavBar />
<ItemListContainer greeting ={"Bienvenidos a mi tienda virtual"}/>

</ChakraProvider>
</>
  )
}

export default App
