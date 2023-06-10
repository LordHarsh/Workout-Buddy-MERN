import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)
        const url = (process.env.REACT_APP_BACKEND_URL || '') + '/api/user/signup'
        const response = await fetch(url, {
            'method': "POST",
            'headers': { 'Content-Type': 'application/json' },
            'body': JSON.stringify({ email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            setError(null)
            setIsLoading(false)
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update auth context
            dispatch({ type: "LOGIN", payload: json })

        }
    }
    return { signup, isLoading, error }

}