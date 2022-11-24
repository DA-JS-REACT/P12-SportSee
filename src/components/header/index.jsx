import logo from '../../assets/logo.svg'
import './index.css'

function Header() {
    return (
        <div className="headerWrapper">
            <div className="header-logo">
                <img className="logo" src={logo} alt="logo SportSee" />
            </div>

            <nav className="nav-header">
                <ul className="nav-item">
                    <li className="nav-item-list">Accueil</li>
                    <li className="nav-item-list">Profil</li>
                    <li className="nav-item-list">Réglage</li>
                    <li className="nav-item-list">Communauté</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
