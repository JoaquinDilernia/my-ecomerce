import CartWidget from "./CartWidget"

import {Button, Menu, MenuList, MenuButton, MenuItem} from '@chakra-ui/react'
const NavBar = () => {
return (
<>
<div>
<Menu>
  <MenuButton as={Button}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>IPHONE 12</MenuItem>
    <MenuItem>IPHONE 12</MenuItem>
    <MenuItem>IPHONE 12</MenuItem>
  </MenuList>
</Menu>
</div>
<CartWidget/>
</>

)
}

export default NavBar
