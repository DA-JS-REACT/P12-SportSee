/**
 *Page only for checking if data is mocked or not
 */
import { dataMocked } from '../../Services/Api/settings'
import Header from '../../components/Header'
import LayoutVertical from '../../components/LayoutVertical'
import './index.css'
import { Link, useParams } from 'react-router-dom'

function Profil() {
    const { userId } = useParams()
    return (
        <div className="profil-Wrapper">
            <Header />
            {dataMocked ? (
                <div className="profil-container">
                    <LayoutVertical />
                    <div className="profil-info">
                        <h2>les datas proviennent d'ici </h2>
                        <Link to={`/dashboard/${userId}`}>
                            Retour au dashboard
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="profil-container">
                    <LayoutVertical />
                    <div className="profil-info">
                        <h2>les datas proviennent de la micro Api </h2>
                        <Link to={`/dashboard/${userId}`}>
                            Retour au dashboard
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Profil
