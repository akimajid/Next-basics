import { useDispatch } from "react-redux"
import auth_types from "../redux/types/auth"
import { useEffect, useState } from "react"
import Cookies from "js-cookie"

const AuthProvider = ({ children }) => {
    const [isAuthChecked, setIsAuthChecked] = useState(false)

    const dispatch = useDispatch()

    useEffect (() => {
        const savedDataUser = Cookies.get("user_data")

        if (savedDataUser) {
            const parsedUserData = JSON.parse(savedDataUser)

            dispatch({
                type: auth_types.LOGIN_USER,
                payload: parsedUserData
            })
        }

        setIsAuthChecked(true)
    }, [])

    if (!isAuthChecked) return <div>Loading...</div>

    return children
}

export default AuthProvider