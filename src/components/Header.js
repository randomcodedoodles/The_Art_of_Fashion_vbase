import { Link } from 'react-router-dom'
import logo from '../Resources/Logo.svg'
import "./Header.css"


export const Header = () => {
    return (
        <header className="App-header">
            <nav>
                <div className="logo"><img src={logo} alt="company"/></div>
                <div className="nav-links">
                    <ul>
                        <li>
                            <Link to='/'> HOME </Link>
                        </li>
                        <li>
                            <Link to='/about-us'> ABOUT US </Link>
                        </li>
                        <li>
                            <Link to='/contact-us'> CONTACT US </Link>
                        </li>
                        <li>
                            <Link to='#'> LOGIN </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}