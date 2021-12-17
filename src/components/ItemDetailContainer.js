import ItemDetail from "./ItemDetail"

const productoInicial = {
    nombre : "Pizza",
    precio : 700
}


const ItemDetailContainer = () => {

  
    return (
        <div>
            {<ItemDetail/>}
            <ItemDetail producto={productoInicial}/>
        </div>
    )
}

export default ItemDetailContainer
