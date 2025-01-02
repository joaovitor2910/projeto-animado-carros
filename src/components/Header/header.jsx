import logo from '../../assets/logo.png'
import './header.css'

function Header() {
    
    
    
    return (
        <header>
            <img src={logo} alt="fp logo"/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Carros</li>
                    <li>Fale Conosco</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header