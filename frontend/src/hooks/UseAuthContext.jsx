import { useContext } from "react"
import { AuthContext} from "../context/AuthContext"

export const UseAuthContext = () => {
const context = useContext(AuthContext)
    if (!context) {
        throw Error('useAuthcontext must be use inside authcontext')
    }
    return context
}
