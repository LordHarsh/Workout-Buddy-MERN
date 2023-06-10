import { AuthContext } from '../context/authContext'
import { useContext } from 'react'

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw Error('useWorkoutContext must be used inside a WorkoutContextProvider')
    }
    return context
}