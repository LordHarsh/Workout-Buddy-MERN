require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const workoutRoutes = require('./routes/workouts')
// express app
const app = express()


// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // app listen
        app.listen(process.env.PORT, () => {
            console.log(`server listening on port ${process.env.PORT}`)
        })

    })
    .catch((error) => {
        console.log(error)
    })