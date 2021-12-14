import CartWidget from "./CartWidget"

const Header = () => {
    return (
        <header id="main-header" className="header">
            <h1>E-Commerce Ejercicio</h1>
            <CartWidget/>
            <nav class="menu">
                <ul>
                    <li><a href="./index.html">INICIO</a></li>
                    <li><a href="./menu.html" class="menudrop">MENU</a></li>
                    <li><a href="./onSale.html">OFERTAS</a></li>
                    <li><a href="./aboutUs.html">NOSOTROS</a></li>
                    <li><a href="./contact.html">CONTACTO</a></li>   
                </ul>
            </nav>
        </header>
    )
}

export default Header