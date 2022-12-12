import './index.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useFetch } from '../../Hooks'
import Loader from '../../components/Loader'
/**
 * Home page
 * @returns  {JsxElement}
 */
function Home() {
    const url = '../data/mockdata.json'
    const { data, error, isLoading } = useFetch(url)
    if (error) {
        return <div>Oups il y a eu un problème</div>
    }
    return (
        <section className="homeWrapper">
            <div className="home-logo">
                <img src={logo} alt="logo" />
            </div>

            {isLoading ? (
                <Loader />
            ) : (
                <div className="home-list-link">
                    <ul className="list-link">
                        {data.users.map((user) => (
                            <li key={user.id} className="list-link-item">
                                <Link to={`/dashboard/${user.id}`}>
                                    <span className="link-item">
                                        {user.userInfos.firstName}
                                    </span>
                                    <span className="link-item">
                                        {user.userInfos.lastName}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}

export default Home
