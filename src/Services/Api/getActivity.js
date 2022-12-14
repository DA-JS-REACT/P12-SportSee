/**
 * Call Api  for endpoint activity
 */

import Activity from '../../Models/Activity'
import { reshapeActivity } from './reshape'
import { dataMocked } from './settings'

/**
 *
 * @param {State} setActivity - state which manages the data
 * @param {State} setError  - state which handles errors on the call Api
 * @param {State} setLoading - state which manages call loads Api
 * @param {String} userId  - id of the user retrieved on url
 * @returns {Promise}
 */
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
    setLoading(true)
    try {
        const response = await fetch(url, fetchOptions)

        const result = await response.json()

        if (dataMocked) {
            const id = parseInt(userId)
            const activity = result.activity.find(
                (activity) => activity.userId === id
            )

            let sessionsOfUser = []
            activity.sessions.forEach((element) => {
                const data = reshapeActivity(element)
                const getActivity = new Activity(data)
                sessionsOfUser.push(getActivity)
            })
            setActivity(sessionsOfUser)
        } else {
            let sessionsOfUser = []
            result.data.sessions.forEach((session) => {
                const data = reshapeActivity(session)
                const getActivity = new Activity(data)
                sessionsOfUser.push(getActivity)
            })

            setActivity(sessionsOfUser)
        }
    } catch (err) {
        console.log(err)
        setError(true)
    } finally {
        setLoading(false)
    }

    return setActivity, setError, setLoading
}
