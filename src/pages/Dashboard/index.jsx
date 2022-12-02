import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header'
import LayoutVertical from '../../components/layoutVertical'
import './index.css'
import Activity from '../../Models/activity'
import Loader from '../../components/Loader'
import { fetchData } from '../../Services/Api'
import { getUser } from '../../Services/Api/getUser'
import { getActivity } from '../../Services/Api/getActivity'
import Banner from '../../components/banner'
import { dataMocked } from '../../Services/Api/settings'

function Dashboard() {
    const { userId } = useParams()
    const [user, setUser] = useState(null)
    const [activity, setActivity] = useState(null)

    const [getData, setGetData] = useState({ ' ': {} })
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const [isMock, setIsMock] = useState(false)

    // if (error) {
    //     return <div>Oups il y a eu un problème</div>
    // }

    useEffect(() => {
        // if (dataMocked) {
        //     setIsMock(true)
        //     // fetchData(setGetData, setError, setLoading, id, 'user', isMock)
        //     // setUser(getData)
        //     // fetchData(setGetData, setError, setLoading, id, 'activity', isMock)
        //     // setActivity(getData)
        // } else {
        //     setIsMock(false)
        //     fetchData(setGetData, setError, setLoading, userId, 'user')
        // }
        getUser(setUser, setError, setLoading, userId)
        getActivity(setActivity, setError, setLoading, userId)
    }, [userId])

    console.log('activity', activity)

    return (
        <section className="dashboardWrapper">
            <Header />
            <div className="container">
                <LayoutVertical />
                {isLoading ? (
                    <Loader />
                ) : user && activity ? (
                    <div>
                        <Banner name={user.getUser.firstName} />
                        <Activity data={activity} />
                    </div>
                ) : (
                    ''
                )}
            </div>
        </section>
    )
}
export default Dashboard

// {isLoading ? (
//
// ) : isData ? (
//     <div>
//         <Banner name={getUser.firstName} />
//         <div>{/* <Activity data={activity} /> */}</div>
//     </div>
// ) : (
//     <div>Oups</div>
// )}
