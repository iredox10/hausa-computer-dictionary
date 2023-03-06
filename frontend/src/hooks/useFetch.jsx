import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState()
    const [err, setErr] = useState()
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (err) {
                setErr(err)
            }
        }
        fetch()
    }, [])
    return {data,err}
}

export default useFetch
