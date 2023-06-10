# Workout Buddy [using MERN stack]

This is a MERN stack application for tracking the workouts of users. It's a web app where users can signup and save their workout details. This includes workout name, load and reps.

## Tech Stack
MongoDB
Express
React
Node

## Local Setup

* Install `Node.js` and `MongoDB`.
* Clone the [repository](!https://github.com/LordHarsh/Workout-Buddy-MERN).
* In the project directory, run npm install to install the dependencies.
* To start the backend, run npm run dev.
* To start the frontend, run npm start.

``` bash
git clone https://github.com/LordHarsh/Workout-Buddy-MERN.git
cd Workout-Buddy-MERN
```
* Create .env files in frontend and backend folders. Take reference from .env.example files.
``` bash
cd backend
npm install && npm run dev
cd ../frontend
npm install && npm start
```

## Routes
The following routes are available:

/api/user/signup - POST to create a new user.
/api/user/login - POST to log in a user.
/api/workouts/ - GET to get all workouts.
/api/workouts/:id - GET to get a single workout.
/api/workouts/ - POST to create a new workout.
/api/workouts/:id - DELETE to delete a workout.
/api/workouts/:id - UPDATE to update a workout.
To start the application, users need to start the app separately from backend and frontend.
To start the backend, run npm run dev in the backend directory.

To start the frontend, run npm start in the frontend directory.

The application will be available at http://localhost:3000.

## Contributing
Please feel free to contribute to this project. To do so, fork the repository and make your changes. Then, open a pull request and I will review your changes.

## License
This project is licensed under the GNU GENERAL PUBLIC LICENSE.
