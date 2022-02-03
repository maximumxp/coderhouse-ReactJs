import { useState, useEffect } from 'react'
import Header from "./components/Nav/Header"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {

  let [show, setShow] = useState(false)
  const links = [
    { href: "#", name: "Inicio ", id: 1 },
    { href: "#", name: "Productos ", id: 2 },
    { href: "#", name: "Contactos ", id: 3 },
    { href: "#", name: "Carrito ", id: 4 }
]
  
    return (
      <>
          <Header nombre={"E-Commerce"} links={links} />
          <ItemListContainer greeting={"Bienvenido!"} />
          <ItemDetailContainer/>
      </>
    );
}

export default App;


