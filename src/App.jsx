import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Principal from "./components/Principal";
import Cart from "./components/Cart";
import Contact from "./components/Contact"; 
import ShoppingCartProvider from "./Context/ShoppingCartContext";
import Footer from "./components/Footer";
const App = () => {

  return (
    <>
      <ChakraProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Principal/>} />
              <Route exact path="/catalogue" element={<ItemListContainer />} />
              <Route
                exact
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ShoppingCartProvider>
      </ChakraProvider>
    </>
)
}

export default App
