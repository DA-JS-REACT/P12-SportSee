/**
 * Call Api  for endpoint average-session
 */
import { Average } from '../../Models/Average'
import { reshapeAverage } from './reshape'
import { dataMocked, pathApi } from './settings'

/**
 * Call Api  for endpoint average-session
 * @param {function} setAverages  - state which manages the data
 * @param {function} setError  - state which handles errors on the call Api
 * @param {function} setLoading - state which manages call loads Api
 * @param {String} userId  - id of the user retrieved on url
 * @returns {Promise.<void>} void
 */

export async function getAverages(setAverages, setError, setLoading, userId) {
    let url = ''
    if (dataMocked) {
        url = '../data/mockdata.json'
    } else {
        url = `${pathApi}/user/${userId}/average-sessions`
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
}
