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
<header>
  <NavBar />
</header>
<body>
  <div className='containerbody'>
<ItemListContainer greeting ={"Bienvenidos a mi tienda virtual"}/>
</div>
</body>
<footer>

</footer>

</ChakraProvider>
</>
)
}

export default App
