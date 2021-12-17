import ItemCount from "./itemCount"

function resumen(producto){

    const onAdd = (cantidad)=>{ 
        console.log("Soy onAdd desde Item")
        console.log("Cantidad de items: " + cantidad)
   
    } 

    return(
    
        <div>
            <h1>Detalle de producto</h1>
                <p>Nombre: {producto.nombre}</p>
                <p>Precio: ${producto.precio}</p>
                <ItemCount stock={8} initial={1} onAdd={onAdd} />
        </div>)
    
}



function calcular(operacion){
    let seleccionados
    if(operacion==='suma'){
        
        seleccionados++

    }

    if(operacion==='resta'){
        seleccionados--

    }

    return seleccionados;
}

const Item = ({item}) => {
    return (
        <article>
            <h3>{item.nombre}</h3>
            <p>Precio : ${item.precio}</p>
            <button onClick={() => calcular('resta')}>-</button>
            <button onClick={() => calcular('suma')}>+</button>
            <button onClick={() => resumen()}>ver detalle</button>
        </article>
    )
}

export default Item
