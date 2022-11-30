import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header'
import LayoutVertical from '../../components/layoutVertical'
import User from '../../models/user'
import { fetchData } from '../../components/Api/index'
import './index.css'
import Activity from '../../models/activity'
import Loader from '../../components/Loader'

function Dashboard() {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    const [activity, setActivity] = useState(null)
    const [isData, setIsData] = useState(false)
    // const url = '../data/mockdata.json'
    // const { data, error, isLoading } = useFetch(url)
    const { data, error, isLoading } = fetchData()
    const id = parseInt(userId)

    if (error) {
        return <div>Oups il y a eu un problème</div>
    }

    useEffect(() => {
        const length = Object.keys(data).length
        if (length > 0) {
            const profil = data.users.find((user) => user.id === id)
            setUser(profil)
            const activity = data.activity.find((user) => user.userId === id)
            setActivity(activity.sessions)
            setIsData(true)
        }
    }, [data])

    return (
        <section className="dashboardWrapper">
            <Header />
            <div className="container">
                <LayoutVertical />

                {isLoading ? (
                    <Loader />
                ) : isData ? (
                    <div>
                        <User data={user} />
                        <div>
                            <Activity data={activity} />
                        </div>
                    </div>
                ) : (
                    <div>Oups</div>
                )}
            </div>
        </section>
    )
}
export default Dashboard
