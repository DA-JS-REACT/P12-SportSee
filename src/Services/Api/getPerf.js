/**
 * Call Api  for endpoint performance
 */

import Perf from '../../Models/Perf'
import { reshapePerf } from './reshape'
import { dataMocked } from './settings'

/**
 *
 * @param {State} setPerf  - state which manages the data
 * @param {State} setError  - state which handles errors on the call Api
 * @param {State} setLoading - state which manages call loads Api
 * @param {String} userId  - id of the user retrieved on url
 * @returns {FetchResponse}
 */
export async function getPerf(setPerf, setError, setLoading, userId) {
    let url = ''
    if (dataMocked) {
        url = '../data/mockdata.json'
    } else {
        url = `http://localhost:3000/user/${userId}/performance`
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
            const id = parseInt(userId)
            const performance = result.perf.find(
                (perform) => perform.userId === id
            )
            const data = reshapePerf(performance)
            const getPerf = new Perf(data)
            setPerf(getPerf)
        } else {
            const data = reshapePerf(result.data)
            const getPerf = new Perf(data)
            setPerf(getPerf)
        }
    } catch (err) {
        console.log(err)
        setError(true)
    } finally {
        setLoading(false)
    }

    return setPerf, setError, setLoading
}
