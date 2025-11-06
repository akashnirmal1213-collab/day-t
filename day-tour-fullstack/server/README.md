# Day Tour Fullstack Server

This is the server-side application for the Day Tour project, which provides user authentication and activity management functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the server directory:
   ```
   cd day-tour-fullstack/server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your environment variables by creating a `.env` file based on the `.env.example` provided.

## Usage

To start the server, run:
```
npm start
```

The server will be running on `http://localhost:5000` (or the port specified in your environment variables).

## API Endpoints

- **Authentication**
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in an existing user

- **Activities**
  - `GET /api/activities` - Retrieve all activities for the logged-in user
  - `POST /api/activities` - Add a new activity
  - `PUT /api/activities/:id` - Update an existing activity
  - `DELETE /api/activities/:id` - Delete an activity

## Environment Variables

The following environment variables are required:

- `PORT` - The port on which the server will run (default is 5000)
- `MONGODB_URI` - The connection string for your MongoDB database
- `JWT_SECRET` - Secret key for signing JWT tokens

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.