const Header = ({nombre,links}) => {

    return (
        <header id="main-header" className="header">
            <div id="brand">
                <h1>{nombre}</h1>
            </div>
            <nav>
                {links.map((elemento, indice) => {
                    return <a key={elemento.id} href={elemento.href}>{elemento.name}</a>
                })}
                <span className="material-icons">
                    shopping_cart
                </span>
            </nav>
        </header>
    )
}

export default Header