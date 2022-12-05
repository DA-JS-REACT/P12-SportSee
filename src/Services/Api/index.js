// import { useState, useEffect } from 'react'
import Activity from '../../Models/Activity'
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

            switch (endpoints) {
                case 'user':
                    setGetData({ user: { getUser } })
                    break
                case 'activity':
                    setGetData(sessionsOfUser)
                    break
                case 'average':
                    setGetData()
                    break
                case 'performance':
                    setGetData()
                    break
            }
        } else {
            console.log('mock false')
            const getUser = new User(result.data)
            const getActivity = new Activity(result.data.sessions)
            switch (endpoints) {
                case 'user':
                    setGetData({ user: { getUser } })
                    break
                case 'activity':
                    setGetData(getActivity)
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

    return setGetData, setError, setLoading
}
