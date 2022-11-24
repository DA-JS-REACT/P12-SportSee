import './index.css'
import Icon1 from '../../assets/icon/icon1.svg'
import Icon2 from '../../assets/icon/icon2.svg'
import Icon3 from '../../assets/icon/icon3.svg'
import Icon4 from '../../assets/icon/icon4.svg'

function LayoutVerical() {
    return (
        <section className="layoutVerticalWrapper">
            <nav className="icon-container">
                <ul className="list-icon">
                    <li className="list-icon-item">
                        <img className="icon" src={Icon1} alt={Icon1} />
                    </li>
                    <li className="list-icon-item">
                        <img className="icon" src={Icon2} alt={Icon2} />
                    </li>
                    <li className="list-icon-item">
                        <img className="icon" src={Icon3} alt={Icon3} />
                    </li>
                    <li className="list-icon-item">
                        <img className="icon" src={Icon4} alt={Icon4} />
                    </li>
                </ul>
            </nav>
            <div className="text-container">
                <p className="copiright">Copiryght, SportSee 2020</p>
            </div>
        </section>
    )
}

export default LayoutVerical
