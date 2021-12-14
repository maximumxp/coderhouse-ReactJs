import Header from "./components/Nav/Header"
import ItemListContainer from "./ItemListContainer"

function App () {
    return (
        <>
            <Header>
            <ItemListContainer greeting="Lista de items"/>
            </Header>
        </>
    )
}

export default App