/**
 * Page for resume profil of user
 */

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import LayoutVertical from '../../components/LayoutVertical'
import Loader from '../../components/Loader'
import { getUser } from '../../Services/Api/getUser'
import Banner from '../../components/Banner'
import BarChartSession from '../../components/BarChartSession'
import UserInfos from '../../components/UserInfos'
import LinearChartAverage from '../../components/LinearChartAverage'
import './index.css'
import RadarChartPerf from '../../components/RadarChartPerf'
import RadialChartScore from '../../components/RadialChartScore'
import Error from '../../components/Error'

function Dashboard() {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getUser(setUser, setError, setLoading, userId)
    }, [userId])

    return (
        <section className="dashboard-Wrapper">
            <Header />
            <div className="dashboard-container">
                <LayoutVertical />
                {isLoading && !error ? (
                    <Loader />
                ) : user ? (
                    <div className="container-user">
                        <section className="user-banner">
                            <Banner name={user.firstName} />
                        </section>
                        <section className="user-infos">
                            <div className="infos-graph">
                                <BarChartSession userId={userId} />
                                <div className="graph">
                                    <LinearChartAverage userId={userId} />
                                    <RadarChartPerf userId={userId} />
                                    <RadialChartScore data={user.score} />
                                </div>
                            </div>

                            <aside className="infos-data">
                                <UserInfos
                                    value={user.calories}
                                    keyData={'calories'}
                                />
                                <UserInfos
                                    value={user.proteines}
                                    keyData={'proteines'}
                                />
                                <UserInfos
                                    value={user.glucides}
                                    keyData={'glucides'}
                                />
                                <UserInfos
                                    value={user.lipides}
                                    keyData={'lipides'}
                                />
                            </aside>
                        </section>
                    </div>
                ) : (
                    <Error page={true} />
                )}
            </div>
        </section>
    )
}
export default Dashboard
