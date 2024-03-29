import { Flex } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";


const CartWidget = ({}) => {
  const { cartQty } = useContext(CartContext);
  return (
    <>       
    <Flex>
    <i><FontAwesomeIcon icon={faCartShopping} color="#fff" fontSize={40} /></i>
            <p className="cantidad_items">{cartQty}</p>
    </Flex>
    </>
  )
}

export default CartWidget
