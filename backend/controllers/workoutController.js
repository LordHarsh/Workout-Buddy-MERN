const Workout = require('../models/workoutModel')
const mongoose = require("mongoose")


// get all workouts
const getWorkouts = async (req, res) => {
    const user_id = req.user._id

    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 })

    res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Is not a valid object id" })
    }
    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: "No such workout" })
    }
    res.status(200).json(workout)
}

// create a workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    let empty_fields = []

    if (!title) {
        empty_fields.push('title')
    }
    if (!load) {
        empty_fields.push('load')
    }
    if (!reps) {
        empty_fields.push('reps')
    }
    if (empty_fields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', empty_fields })
    }

    try {
        const user_id = req.user._id
        const workout = await Workout.create({ title, load, reps, user_id })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Not a valid object id" })
    }
    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        res.status(400).json({ error: "No such workout" })
    }
    res.status(200).json(workout)
}

// update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Not a valid object id" })
    }

    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({ error: "No such workout" })
    }
    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}