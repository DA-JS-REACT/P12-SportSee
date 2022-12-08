import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header'
import LayoutVertical from '../../components/layoutVertical'

import Loader from '../../components/Loader'
import { fetchData } from '../../Services/Api'
import { getUser } from '../../Services/Api/getUser'
import { getActivity } from '../../Services/Api/getActivity'
import { getAverages } from '../../Services/Api/getAverages'
import { getPerf } from '../../Services/Api/getPerf'

import Banner from '../../components/banner'
// import { dataMocked } from '../../Services/Api/settings'
import BarChartSession from '../../components/BarChartSession'
import UserInfos from '../../components/UserInfos'
import LinearChartAverage from '../../components/LinearChartAverage'
import './index.css'
import RadarChartPerf from '../../components/RadarChartPerf'
import RadialChartScore from '../../components/RadialChartScore'

function Dashboard() {
    const { userId } = useParams()
    const [user, setUser] = useState({ ' ': {} })
    const [activity, setActivity] = useState([])
    const [average, setAverage] = useState([])
    const [perf, setPerf] = useState(null)

    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    // if (error) {
    //     return <div>Oups il y a eu un problème</div>
    // }

    useEffect(() => {
        // fetchData(setUser, setError, setLoading, userId, 'user')
        // fetchData(setActivity, setError, setLoading, userId, 'activity')
        // fetchData(setAverage, setError, setLoading, userId, 'average')
        getUser(setUser, setError, setLoading, userId)
        getActivity(setActivity, setError, setLoading, userId)
        getAverages(setAverage, setError, setLoading, userId)
        getPerf(setPerf, setError, setLoading, userId)
    }, [userId])

    // console.log('user', user)
    // console.log('activity', activity)
    // console.log('average', average)
    // console.log('perf', perf)
    // if (perf) {
    //     console.log('perf1', perf.translateENtoFR)
    // }

    return (
        <section className="dashboard-Wrapper">
            <Header />
            <div className="dashboard-container">
                <LayoutVertical />
                {isLoading ? (
                    <Loader />
                ) : user && activity && average && perf ? (
                    <div className="container-user">
                        <section className="user-banner">
                            <Banner name={user.firstName} />
                        </section>
                        <section className="user-infos">
                            <div className="infos-graph">
                                <BarChartSession data={activity} />
                                <div className="graph">
                                    <LinearChartAverage data={average} />
                                    <RadarChartPerf data={perf} />
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
                    ''
                )}
            </div>
        </section>
    )
}
export default Dashboard
