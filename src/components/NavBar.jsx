import CartWidget from "./CartWidget"

import {Button, Menu, MenuList, MenuButton, MenuItem} from '@chakra-ui/react'
const NavBar = () => {
return (
<>
<header>
<div className="interior">
  <a href="" className="logo"><img src="../img/logo.png" alt="" /> Apple Argentina</a>
<nav className="navegacion">
<ul>
<li><a href="">Inicio</a></li>
<li className="submenu">
  <a href="">Productos</a>
  <ul className="hijos">
<li><a href="">Iphone 12</a></li>
<li><a href="">Iphone 13</a></li>
<li><a href="">Iphone 14</a></li>
  </ul>
  </li>
<li><a href="">Contacto</a></li>
<li><a href="">Login</a></li>
</ul>
</nav>
</div>
</header>
<CartWidget/>
</>

)
}

export default NavBar
