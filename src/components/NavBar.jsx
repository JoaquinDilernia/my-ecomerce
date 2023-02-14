import CartWidget from "./CartWidget"
import { Menu, MenuButton, MenuIcon, MenuItem, MenuList} from "@chakra-ui/react"
const NavBar = () => {
return (
<>
<h1>Apple Argentina</h1>
<Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Iphone 12</MenuItem>
    <MenuItem>Iphone 12</MenuItem>
    <MenuItem>Iphone 12</MenuItem>
  </MenuList>
</Menu>


<CartWidget/>


</>

)
}

export default NavBar
