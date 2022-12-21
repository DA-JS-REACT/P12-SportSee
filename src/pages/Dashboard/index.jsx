/**
 * Page for resume profil of user
 */

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import LayoutVertical from '../../components/LayoutVertical'
import Loader from '../../components/Loader'
import { getUser } from '../../Services/Api/getUser'
import { getActivity } from '../../Services/Api/getActivity'
import { getAverages } from '../../Services/Api/getAverages'
import { getPerf } from '../../Services/Api/getPerf'
import { Banner } from '../../components/Banner'
import BarChartSession from '../../components/BarChartSession'
import UserInfos from '../../components/UserInfos'
import LinearChartAverage from '../../components/LinearChartAverage'
import './index.css'
import RadarChartPerf from '../../components/RadarChartPerf'
import RadialChartScore from '../../components/RadialChartScore'
import Error from '../../components/Error'
import React from 'react'

function Dashboard() {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    const [activity, setActivity] = useState([])
    const [average, setAverage] = useState([])
    const [perf, setPerf] = useState(null)
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getUser(setUser, setError, setLoading, userId)
        getActivity(setActivity, setError, setLoading, userId)
        getAverages(setAverage, setError, setLoading, userId)
        getPerf(setPerf, setError, setLoading, userId)
    }, [userId])

    return (
        <section className="dashboard-Wrapper">
            <Header />
            <div className="dashboard-container">
                <LayoutVertical />
                {isLoading && !error ? (
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
                                    <RadarChartPerf data={perf.dataOfperf} />
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
                    <Error />
                )}
            </div>
        </section>
    )
}
export default Dashboard
