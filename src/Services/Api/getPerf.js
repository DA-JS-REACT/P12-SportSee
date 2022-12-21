/**
 * Call Api  for endpoint performance
 */

import { Perf } from '../../Models/Perf'
import { reshapePerf } from './reshape'
import { dataMocked, pathApi } from './settings'

/**
 * Call Api  for endpoint performance
 * @param {function} setPerf  - state which manages the data
 * @param {function} setError  - state which handles errors on the call Api
 * @param {function} setLoading - state which manages call loads Api
 * @param {String} userId  - id of the user retrieved on url
 * @returns {Promise.<Void>} void
 */
export async function getPerf(setPerf, setError, setLoading, userId) {
    let url = ''
    if (dataMocked) {
        url = '../data/mockdata.json'
    } else {
        url = `${pathApi}/user/${userId}/performance`
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
}
