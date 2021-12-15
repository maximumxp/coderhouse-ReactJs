const{useState} = React
import Header from "./components/Nav/Header"
import ItemListContainer from "./ItemListContainer"

function App () {
    const[count,setCount] = useState(0);
    return (

        <div className="app">
            <Header>
            <ItemListContainer greeting="Lista de items"/>
            <p>Pizzas</p>
            <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
                <div className="button-wrapper">
                    <button onClick={()=>setCount(count-1)}>-</button>
                    <button onClick={()=>setCount(count+1)}>+</button>
                </div>
            </Header>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
export default App