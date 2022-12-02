import Activity from '../../Models/Activity'
import { dataMocked } from './settings'

export async function getActivity(setActivity, setError, setLoading, userId) {
    let url = ''
    if (dataMocked) {
        url = '../data/mockdata.json'
    } else {
        url = `http://localhost:3000/user/${userId}/activity`
    }

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
            console.log('mock true')
            const id = parseInt(userId)
            const activity = result.activity.find(
                (activity) => activity.userId === id
            )
            let collectionOfActivities = []
            activity.sessions.forEach((element) => {
                const getActivity = new Activity(element)
                collectionOfActivities.push(getActivity)
            })
            setActivity(collectionOfActivities)
        } else {
            console.log('mock false')
            const getActivity = new Activity(result.data.sessions)
            setActivity(getActivity)
        }
    } catch (err) {
        console.log(err)
        setError(true)
    } finally {
        setLoading(false)
    }

    return setActivity, setError, setLoading
}
