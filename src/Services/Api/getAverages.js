/**
 * Call Api  for endpoint average-session
 */
import Average from '../../Models/Average'
import { reshapeAverage } from './reshape'
import { dataMocked } from './settings'

/**
 *
 * @param {State} setAverages  - state which manages the data
 * @param {State} setError  - state which handles errors on the call Api
 * @param {State} setLoading - state which manages call loads Api
 * @param {String} userId  - id of the user retrieved on url
 * @returns {Promise}
 */

export async function getAverages(setAverages, setError, setLoading, userId) {
    let url = ''
    if (dataMocked) {
        url = '../data/mockdata.json'
    } else {
        url = `http://localhost:3000/user/${userId}/average-sessions`
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
            const average = result.sessions.find(
                (session) => session.userId === id
            )

            let averageOfUser = []
            average.sessions.forEach((element) => {
                console.log(element)
                const data = reshapeAverage(element)
                const getAverage = new Average(data)
                averageOfUser.push(getAverage)
            })

            setAverages(averageOfUser)
        } else {
            let averageOfUser = []
            result.data.sessions.forEach((session) => {
                const data = reshapeAverage(session)
                const getAverage = new Average(data)
                averageOfUser.push(getAverage)
            })

            setAverages(averageOfUser)
        }
    } catch (err) {
        console.log(err)
        setError(true)
    } finally {
        setLoading(false)
    }

    return setAverages, setError, setLoading
}
