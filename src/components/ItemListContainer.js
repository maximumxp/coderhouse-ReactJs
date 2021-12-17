import { useState , useEffect } from "react"
import ItemCount from "./itemCount"
import ItemList from "./ItemList"

const productosIniciales = [
  { nombre: "Pizza", precio: 700 },
  { nombre: "Hamburguesa", precio: 350 },
  { nombre: "Pancho", precio: 150 },
  { nombre: "Sushi", precio: 900 }
]

const ItemListContainer = ({greeting}) => {

  const [cantidad, setCantidad] = useState(0)

  let [lista, setLista] = useState([])
  useEffect(()=>{

      const promesa = new Promise((res,rej)=>{
          setTimeout(()=>{
              res(productosIniciales)
          },2000)
      })
      
      promesa
      .then((productos)=>{
          setLista(productos)
      })
      .catch(()=>{
          console.log("Error")
      })

  },[])

  return (
      <div>
         <h2>{greeting}</h2>
         <p>Items seleccionados : {cantidad}</p>   
         <ItemList lista={lista}/>
      </div>
  )

};

export default ItemListContainer;
