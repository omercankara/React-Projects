import { useState, useEffect } from "react"

const useFetch = (url, method="GET") => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)

    const postData = (data) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }

    useEffect(() => {
        const fetchData = async (options) => {
            setLoading(true)
            try {
                const res = await fetch(url, { ...options })
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                const data = await res.json()
                setLoading(false)
                setData(data)
            }
            catch (err) {
                setLoading(false)
                setError("Veriler gelmedi sunucu kapalii")
                console.log(err.message)
            }
        }

        if (method === "GET") {
            fetchData()
        }
        if (method === "POST" && options) {
            fetchData(options)
        }
        
    }, [url, options, method])


    return {
        data,
        isLoading,
        error,
        postData

    }
}

export default useFetch