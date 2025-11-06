# Day Tour Fullstack Project

## Overview
The Day Tour Fullstack project is a web application designed to help users track their daily activities efficiently. It consists of a client-side application built with HTML, CSS, and JavaScript, and a server-side application built with Node.js and Express. The application allows users to register, log in, and manage their daily activities.

## Features
- User authentication (registration and login)
- Activity tracking (CRUD operations)
- Responsive user interface
- Data persistence using MongoDB

## Project Structure
```
day-tour-fullstack
├── client                # Client-side application
│   ├── public
│   │   └── index.html    # Entry point for the user interface
│   ├── src
│   │   └── assets
│   │       └── styles.css # CSS styles for the application
│   ├── package.json       # Client dependencies and scripts
│   └── README.md          # Client documentation
├── server                # Server-side application
│   ├── src
│   │   ├── index.js       # Entry point for the server
│   │   ├── config
│   │   │   └── db.js      # Database configuration
│   │   ├── routes
│   │   │   ├── auth.js     # Authentication routes
│   │   │   └── activities.js # Activity management routes
│   │   ├── controllers
│   │   │   ├── authController.js # Authentication logic
│   │   │   └── activitiesController.js # Activity logic
│   │   ├── models
│   │   │   ├── userModel.js # User schema and model
│   │   │   └── activityModel.js # Activity schema and model
│   │   ├── middleware
│   │   │   └── authMiddleware.js # Authentication middleware
│   │   └── utils
│   │       └── hash.js     # Password hashing utilities
│   ├── package.json        # Server dependencies and scripts
│   ├── .env.example        # Example environment variables
│   └── README.md           # Server documentation
├── docker-compose.yml      # Docker configuration for the application
├── .gitignore              # Files to ignore in version control
└── README.md               # Overall project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (for database)
- Docker (optional, for containerization)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd day-tour-fullstack
   ```

2. Install server dependencies:
   ```
   cd server
   npm install
   ```

3. Install client dependencies:
   ```
   cd client
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in the server directory and fill in the required values.

### Running the Application
- To start the server:
  ```
  cd server
  npm start
  ```

- To start the client:
  ```
  cd client
  npm start
  ```

### Docker
To run the application using Docker, use the following command:
```
docker-compose up
```

## Usage
- Access the client application in your browser at `http://localhost:3000`.
- Use the application to register, log in, and manage your daily activities.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.