import axios from "axios"
import { useEffect, useState } from "react"
import { UseAuthContext } from "./UseAuthContext"


const useFetch = (url) => {
    const [data, setData] = useState()
    const [err, setErr] = useState()
    const { state } = UseAuthContext()
    const token = state.user && state.user.jwt
    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source
        const fetch = async () => {
            try {
                const res = await axios.get(url,{headers:{Authorization:`Bearer ${token}`}})
                setData(res.data)
            } catch (err) {
                setErr(err.response.data)
            }
        }
        fetch()
        return () => axios.get(url,{cancelTokens:cancelTokenSource})
    }, [])
    return {data,err}
}

export default useFetch
