// import { useState, useEffect } from 'react'
import User from '../../Models/User'
import { dataMocked } from './settings'

export async function fetchData(
    setGetData,
    setError,
    setLoading,
    id,
    endpoints,
    isMock
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
                url = `http://localhost:3000/user/${id}`
                break
            case 'activity':
                url = `http://localhost:3000/user/${id}/activity`
                break
            case 'average':
                url = `http://localhost:3000/user/${id}/average-sessions`
                break
            case 'performance':
                url = `http://localhost:3000/user/${id}/performance`
                break
            default:
                url = '../data/mockdata.json'
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
            const profil = result.users.find((user) => user.id === id)
            const getUser = new User(profil)
            // // setGetData({ user: { getUser } })
            const activity = result.activity.find(
                (activity) => activity.userId === id
            )
            const getActivity = activity.sessions
            // setGetData({ activity: { getActivity } })
            switch (endpoints) {
                case 'user':
                    return setGetData({ user: { getUser } })
                case 'activity':
                    return setGetData({ activity: { getActivity } })

                case 'average':
                    setGetData()
                    break
                case 'performance':
                    setGetData()
                    break
            }
            if (isMock) {
                console.log('mock true')
            }
        } else {
            console.log('mock false')
            const getUser = new User(result.data)
            switch (endpoints) {
                case 'user':
                    return setGetData({ user: { getUser } })

                case 'activity':
                    setGetData()
                    break
                case 'average':
                    setGetData()
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

    // useEffect(() => {
    //    await fetch(url, fetchOptions)
    //         .then((res) => {
    //             if (res.ok) {
    //                 setLoading(false)
    //                 const response = await res.json()
    //                 return response
    //             }
    //         })
    //         .then(
    //             (result) => {
    //                 if (dataMocked) {
    //                     // const userId = parseInt(id)
    //                     // const profil = result.users.find(
    //                     //     (user) => user.id === userId
    //                     // )
    //                     // const getUser = new User(profil)
    //                     // setUser(getUser)
    //                     setData(result)
    //                 } else {
    //                     const getUser = new User(result)
    //                     switch (endpoints) {
    //                         case 'user':
    //                             setUser(getUser)
    //                             break
    //                         case 'activity':
    //                             setActivity()
    //                             break
    //                         case 'average':
    //                             setAverage()
    //                             break
    //                         case 'performance':
    //                             setPerformance()
    //                             break
    //                     }
    //                 }
    //                 // const userId = parseInt(id)
    //                 // const toto = result.users.find((user) => user.id === userId)
    //             },
    //             (error) => {
    //                 console.log(error)
    //                 setLoading(true)
    //                 setError(true)
    //             }
    //         )
    // }, [])
    let getData = {}

    // switch (endpoints) {
    //     case 'user':
    //         getData = { user, error, isLoading }
    //         break
    //     case 'activity':
    //         getData = { activity, error, isLoading }
    //         break
    //     case 'average':
    //         getData = { average, error, isLoading }
    //         break
    //     case 'performance':
    //         getData = { performance, error, isLoading }
    //         break
    //     default:
    //         getData = { data, error, isLoading }
    // }
    return setGetData, setError, setLoading
}
