import User from '../../Models/User'
import { dataMocked } from './settings'

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
            console.log('mock true')
            const id = parseInt(userId)
            const profil = result.users.find((user) => user.id === id)
            const getUser = new User(profil)
            setUser({ getUser })
        } else {
            console.log('mock false')
            const getUser = new User(result.data)
            setUser({ getUser })
        }
    } catch (err) {
        console.log(err)
        setError(true)
    } finally {
        setLoading(false)
    }

    return setUser, setError, setLoading
}
