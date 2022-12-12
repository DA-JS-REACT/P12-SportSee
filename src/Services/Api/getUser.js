/**
 * Call Api  for endpoint user profil
 */

import User from '../../Models/User'
import reshapeUser from './reshape'
import { dataMocked } from './settings'

/**
 *
 * @param {State} setUser  - state which manages the data
 * @param {State} setError  - state which handles errors on the call Api
 * @param {State} setLoading - state which manages call loads Api
 * @param {String} userId  - id of the user retrieved on url
 * @returns {FetchResponse}
 */

export async function getUser(setUser, setError, setLoading, userId) {
    let url = ''
    if (dataMocked) {
        url = '../data/mockdata.json'
    } else {
        url = `http://localhost:3000/user/${userId}`
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
            const profil = result.users.find((user) => user.id === id)
            const data = reshapeUser(profil)
            const getUser = new User(data)
            setUser(getUser)
        } else {
            const data = reshapeUser(result.data)
            const getUser = new User(data)
            setUser(getUser)
        }
    } catch (err) {
        console.log(err)
        setError(true)
        throw new Error('une erreur est survenu')
    } finally {
        setLoading(false)
    }

    return setUser, setError, setLoading
}
