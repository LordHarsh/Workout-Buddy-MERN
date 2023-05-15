import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    
    useEffect(() => {
        const backendUrl = (process.env.REACT_APP_BACKEND_URL || '') + '/api/workouts'
        console.log(backendUrl)
        const fetchWorkouts = async () => {
            const response = await fetch(backendUrl)
            const json = await response.json()
            if (response.ok) {
                dispatch({type:'SET_WORKOUT', payload:json})
            }
        }
        fetchWorkouts();
    }, [dispatch])


    return (
        <div className='home'>

            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home