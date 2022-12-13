import { useFetch } from '../../Hooks'
import Loader from '../../components/Loader'

function Profil() {
    const url = '../data/mockdata.json'
    const { data, error, isLoading } = useFetch(url)
    console.log(data)
    if (error) {
        return <div>Oups il y a eu un problème</div>
    }
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <article className="profil-Wrapper">
                    {' '}
                    {data.users.map((user) => (
                        <ul key={user.id}>
                            <li> {user.id}</li>
                        </ul>
                    ))}
                </article>
            )}
        </div>
    )
}
export default Profil
