import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import {  Button,
  Flex,
  Spacer,
  Box,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,} from '@chakra-ui/react'
  import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
return (

  <>
  <div className="navbar">
    <Flex  className="navbar__" alignItems="center" gap="2" pt="1">
      <Link to={"/"}>
        <Box display="flex" ml="20">
          <img id="logo" src="../img/logo.png" />
          <h1>Apple</h1>
         
        </Box>
      </Link>
      <Spacer />
      <div className="botones_navbar">
        <Flex justifyContent={"center"}>
          <ButtonGroup className="botones" gap="7" justify="center">
            <Button colorScheme="teal" variant="link">
              <Link to={"/catalogue"}>Productos</Link>
            </Button>
            <Menu className="menu_nav">
              <MenuButton
                bg="light"
                as={Button}
                colorScheme="light"
                rightIcon={<ChevronDownIcon />}
              >
                iPhones
              </MenuButton>
              <MenuList bg="#383838">
                <Flex>
                  <Link to={`/category/${"iphone12"}`}>
                    <MenuItem bg="ligth">
                   
                      iPhone 12
                    </MenuItem>
                  </Link>
                </Flex>
                <Flex>
                <Link to={`/category/${"iphone13"}`}>
                  <MenuItem bg="ligth">
                   
                  iPhone 13
                  </MenuItem>
                </Link>  
                </Flex>
                <Flex>
                <Link to={`/category/${"iphone14"}`}>
                  <MenuItem bg="ligth">
                   
                  iPhone 14
                  </MenuItem>
                </Link>  
                </Flex>
                
              </MenuList>
            </Menu>
           
            <Link to={"/contact"}>
            <Button colorScheme="teal" variant="outline">
              Contacto
            </Button>
            </Link>
          </ButtonGroup>
        </Flex>
      </div>
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </Flex>
  </div>
</>
)
}

export default NavBar
