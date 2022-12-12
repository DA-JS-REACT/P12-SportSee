import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './index.css'
/**
 *  Header to the app with navigation
 * @returns {JsxElement}
 */
function Header() {
    return (
        <div className="header-Wrapper">
            <div className="header-logo">
                <img className="logo" src={logo} alt="logo SportSee" />
            </div>

            <nav className="nav-header">
                <ul className="nav-item">
                    <li className="nav-item-list">
                        {' '}
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            end
                        >
                            Acceuil
                        </NavLink>
                    </li>
                    <li className="nav-item-list">
                        <NavLink
                            to="/profil"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            end
                        >
                            Profil
                        </NavLink>
                    </li>
                    <li className="nav-item-list">Réglage</li>
                    <li className="nav-item-list">Communauté</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
