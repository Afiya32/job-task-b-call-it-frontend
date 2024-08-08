# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
BD Call IT Project
Table of Contents
Project Overview
Technologies Used
Installation
Backend Setup
Frontend Setup
Environment Variables
Running the Project
Deployment
Project Structure
License
Project Overview
BD Call IT is an e-commerce application for mechanical keyboards. The project consists of a backend API built with Node.js and Express, and a frontend interface developed using React, Redux, and Tailwind CSS.

Technologies Used
Backend:
Node.js
Express.js
TypeScript
Mongoose (MongoDB)
Zod (for validation)
JWT (for authentication)
dotenv (for environment variables)
Frontend:
React
Redux
TypeScript
Tailwind CSS
React Router DOM
SweetAlert (for alerts)
Lottie (for animations)
Installation
Prerequisites:
Node.js (v16.x or higher)
npm or yarn
MongoDB (local or cloud instance)
git clone https://github.com/your-username/bd-call-it.git
cd bd-call-it
Backend Setup
cd backend
npm install
Setup environment variables:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Frontend Setup
cd frontend
Environment Variables
Make sure to set up the necessary environment variables in both the backend and frontend directories as shown above. These are crucial for connecting to the database, managing authentication, and linking the frontend with the backend.
