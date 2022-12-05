import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header'
import LayoutVertical from '../../components/layoutVertical'
import './index.css'

import Loader from '../../components/Loader'
import { fetchData } from '../../Services/Api'
// import { getUser } from '../../Services/Api/getUser'
// import { getActivity } from '../../Services/Api/getActivity'
import Banner from '../../components/banner'
// import { dataMocked } from '../../Services/Api/settings'
import BarChartSession from '../../components/BarChartSession'
import UserInfos from '../../components/UserInfos'

function Dashboard() {
    const { userId } = useParams()
    const [user, setUser] = useState({ ' ': {} })
    const [activity, setActivity] = useState([])

    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    // if (error) {
    //     return <div>Oups il y a eu un problème</div>
    // }

    useEffect(() => {
        fetchData(setUser, setError, setLoading, userId, 'user')
        fetchData(setActivity, setError, setLoading, userId, 'activity')
        // getUser(setUser, setError, setLoading, userId)
        // getActivity(setActivity, setError, setLoading, userId)
    }, [userId])

    // console.log('activity', activity[0].day)
    console.log('user', user)

    return (
        <section className="dashboard-Wrapper">
            <Header />
            <div className="dashboard-container">
                <LayoutVertical />
                {isLoading ? (
                    <Loader />
                ) : user.user && activity ? (
                    <div className="container-user">
                        <section className="user-banner">
                            <Banner name={user.user.getUser.firstName} />
                        </section>
                        <section className="user-infos">
                            <div className="infos-graph">
                                <BarChartSession data={activity} />
                                <div></div>
                            </div>

                            <aside className="infos-data">
                                <UserInfos
                                    value={user.user.getUser.calories}
                                    keyData={'calories'}
                                />
                                <UserInfos
                                    value={user.user.getUser.proteines}
                                    keyData={'proteines'}
                                />
                                <UserInfos
                                    value={user.user.getUser.glucides}
                                    keyData={'glucides'}
                                />
                                <UserInfos
                                    value={user.user.getUser.lipides}
                                    keyData={'lipides'}
                                />
                            </aside>
                        </section>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </section>
    )
}
export default Dashboard
