import Perf from '../../Models/Perf'

import { dataMocked } from './settings'

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
            const getPerf = new Perf(performance)
            setPerf(getPerf)
        } else {
            const getPerf = new Perf(result.data)
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
