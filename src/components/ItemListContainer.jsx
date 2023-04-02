import { Center } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const ItemListContainer = () => {
  const { category} = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "iphones");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(docs);
      setIsLoading(false);
    });
  }, []);

  const catFilterCategory = products.filter(
    (product) => product.category === category
  );
  

  function render() {
    if (isLoading) {
      return <Loading />;
    } else {
      return category ? (
        <ItemList product={catFilterCategory} />
      ) : (
        <ItemList product={products} />
      );
    }
  }

  function link_routes() {
    if (category != null) {
      return "iPhone > "
    }  else {
      return <h2 id="catalogo_text">Productos</h2>;
    }
  }

  return (
    <>
    
      <div className="links_tree">
        {link_routes()}
        {({category}) ? <Link>{category}</Link>:{}}
      </div>
      <div>
        <Center color="black"></Center>
        {render()}
      </div>
    </>
  );
};

export default ItemListContainer;