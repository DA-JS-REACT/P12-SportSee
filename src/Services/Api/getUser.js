/**
 * Call Api  for endpoint user profil
 */

import { User } from '../../Models/User'
import { reshapeUser } from './reshape'
import { dataMocked, pathApi } from './settings'

/**
 * Call Api  for endpoint user profil
 * @param {function} setUser  - state which manages the data
 * @param {function} setError  - state which handles errors on the call Api
 * @param {function} setLoading - state which manages call loads Api
 * @param {String} userId  - id of the user retrieved on url
 * @returns {Promise.<void>} void
 */

export async function getUser(setUser, setError, setLoading, userId) {
    let url = ''
    if (dataMocked) {
        url = '../data/mockdata.json'
    } else {
        url = `${pathApi}/user/${userId}`
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
    } finally {
        setLoading(false)
    }
}
