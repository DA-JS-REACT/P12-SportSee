import { useEffect, useState } from 'react'

export function fetchData() {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [isLoading, setLoading] = useState(true)
    const url = '../data/mockdata.json'
    const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
        },
    }
    useEffect(() => {
        fetch(url, fetchOptions)
            .then((res) => {
                if (res.ok) {
                    setLoading(false)
                    return res.json()
                }
            })
            .then(
                (result) => {
                    // const userId = parseInt(id)
                    // const toto = result.users.find((user) => user.id === userId)
                    setData(result)
                },
                (error) => {
                    console.log(error)
                    setLoading(true)
                    setError(true)
                }
            )
    }, [])

    return { data, error, isLoading }
}
