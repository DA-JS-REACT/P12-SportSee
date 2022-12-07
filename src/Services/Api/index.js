// import { useState, useEffect } from 'react'
import Activity from '../../Models/Activity'
import Average from '../../Models/Average'
import User from '../../Models/User'
import { dataMocked } from './settings'

export async function fetchData(
    setGetData,
    setError,
    setLoading,
    userId,
    endpoints
) {
    // const [data, setData] = useState({})
    // const [user, setUser] = useState({})
    // const [activity, setActivity] = useState({})
    // const [average, setAverage] = useState({})
    // const [performance, setPerformance] = useState({})
    // const [error, setError] = useState(false)
    // const [isLoading, setLoading] = useState(true)
    // const url = '../data/mockdata.json'
    let url = ''
    if (dataMocked) {
        url = '../data/mockdata.json'
    } else {
        switch (endpoints) {
            case 'user':
                url = `http://localhost:3000/user/${userId}`
                break
            case 'activity':
                url = `http://localhost:3000/user/${userId}/activity`
                break
            case 'average':
                url = `http://localhost:3000/user/${userId}/average-sessions`
                break
            case 'performance':
                url = `http://localhost:3000/user/${userId}/performance`
                break
        }
    }
    console.log('url', url)

    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
        },
    }
    try {
        const response = await fetch(url, fetchOptions)

        const result = await response.json()

        if (dataMocked) {
            const id = parseInt(userId)
            const profil = result.users.find((user) => user.id === id)
            const getUser = new User(profil)

            const activity = result.activity.find(
                (activity) => activity.userId === id
            )
            let sessionsOfUser = []
            activity.sessions.forEach((element) => {
                const getActivity = new Activity(element)
                sessionsOfUser.push(getActivity)
            })

            const average = result.sessions.find(
                (session) => session.userId === id
            )
            let averageOfUser = []
            average.sessions.forEach((element) => {
                const getAverage = new Average(element)
                averageOfUser.push(getAverage)
            })

            switch (endpoints) {
                case 'user':
                    setGetData({ user: { getUser } })
                    break
                case 'activity':
                    setGetData(sessionsOfUser)
                    break
                case 'average':
                    setGetData(averageOfUser)
                    break
                case 'performance':
                    setGetData()
                    break
            }
        } else {
            const getUser = new User(result.data)
            // setGetData({ getUser })

            let sessionsOfUser = []
            result.data.sessions.forEach((element) => {
                const getActivity = new Activity(element)
                sessionsOfUser.push(getActivity)
            })

            // setGetData(sessionsOfUser)

            let averageOfUser = []
            result.data.sessions.forEach((session) => {
                const getAverages = new Average(session)
                averageOfUser.push(getAverages)
            })
            // if (endpoints === 'user') {
            //     const getUser = new User(result.data)
            //     setGetData({ getUser })
            // } else if (endpoints === 'activity') {
            //     let sessionsOfUser = []
            //     result.data.sessions.forEach((element) => {
            //         const getActivity = new Activity(element)
            //         sessionsOfUser.push(getActivity)
            //     })
            //     setGetData(sessionsOfUser)
            // } else if (endpoints === 'average') {
            //     let averageOfUser = []
            //     result.data.sessions.forEach((session) => {
            //         const getAverages = new Average(session)
            //         averageOfUser.push(getAverages)
            //     })
            //     setGetData(averageOfUser)
            // }

            switch (endpoints) {
                case 'user':
                    setGetData({ getUser })
                    break
                case 'activity':
                    setGetData(sessionsOfUser)
                    break
                case 'average':
                    setGetData(averageOfUser)
                    break
                case 'performance':
                    setGetData()
                    break
            }
        }
    } catch (err) {
        console.log(err)
        setError(true)
    } finally {
        setLoading(false)
    }

    return setGetData, setError, setLoading
}
// switch (endpoints) {
//     case 'user':
//         return console.log('fetch', result.data)

//     case 'activity':
//         console.log('fetch1', result.data)
//         break
//     case 'average':
//         setGetData(getAverage)
//         break
//     case 'performance':
//         setGetData()
//         break
// }
