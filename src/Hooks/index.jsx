import { useState, useEffect } from 'react'
/**
 * for simulate connexion of user , only for Home page
 * @param {String} url - url of mocked data
 * @returns {Promise.<{isLoading : boolean, data : object, error : boolean}>}
 */
export function useFetch(url) {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (!url) return setLoading(true)

        async function fetchData() {
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

                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { isLoading, data, error }
}
