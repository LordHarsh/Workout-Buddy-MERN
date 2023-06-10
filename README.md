# Workout Buddy [using MERN stack]

This is a MERN stack application for tracking the workouts of users. It's a web app where users can signup and save their workout details. This includes workout name, load and reps.

## Tech Stack
MongoDB
Express
React
Node

## Application Structure
The application is divided into two folders:

* backend: This folder contains the server-side code.
* frontend: This folder contains the client-side code.
The server-side code is written in Node.js and uses Express.js as a web framework. The client-side code is written in React.js.

## Database
The application uses MongoDB as a database. The database is located in the data folder.

## Local Setup

* Install `Node.js` and `MongoDB`.
* Clone the [repository](https://github.com/LordHarsh/Workout-Buddy-MERN).
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

| Endpoint | Method | Description |
|---|---|---|
| /api/user/signup | POST | Creates a new user. |
| /api/user/login | POST | Logs in a user. |
| /api/workouts/ | GET | Gets all workouts. |
| /api/workouts/:id | GET | Gets a single workout. |
| /api/workouts/ | POST | Creates a new workout. |
| /api/workouts/:id | DELETE | Deletes a workout. |
| /api/workouts/:id | UPDATE | Updates a workout. |

To start the application, users need to start the app separately from backend and frontend.
To start the backend, run npm run dev in the backend directory.

To start the frontend, run npm start in the frontend directory.

The application will be available at http://localhost:3000.

## Deployment
The application can be deployed to a production environment using Heroku or another cloud hosting service.

## Further Development
The application can be further developed by adding additional features, such as:

The ability to track the progress of users over time.
The ability to share workouts with other users.
The ability to create custom workouts.

## Contributing
Please feel free to contribute to this project. To do so, fork the repository and make your changes. Then, open a pull request and I will review your changes.

## License
This project is licensed under the GNU GENERAL PUBLIC LICENSE.
