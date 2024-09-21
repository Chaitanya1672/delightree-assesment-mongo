# Solution MongoDB Aggregation Pipeline Question
Calculate the total number of posts, comments, likes, and views for each user, grouped by age range.

## Use case

- It has support for two routes
  - GET `/api/user-stats`
  - POST `/api/user-stats`

- GET request will give you calculated total number of posts, comments, likes, and views for each user, grouped by age range.
- POST request is for feeding dummy data to database

## Features

- Node.js backend setup
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks
- CI pipeline is for lint check on every pull request to main/master
- Dockerfile for image creation & containerization

## Getting Started

### Prerequisites

- Node.js (version v20.10.0)
- npm (version 10.2.3)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Chaitanya1672/delightree-assesment-mongo.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   ```
   Edit the `.env` file with your configuration.
   **MONGO_DB_URL & DATABASE_NAME is mandatory**

### Usage

To start the development server:
```
npm run dev
```

To build for production:
```
npm run build
```

To start the production server:
```
npm start
```

## Code Quality

This project uses ESLint and Prettier to ensure code quality and consistency. Husky is configured to run these checks before each commit.

To run linting manually:
```
npm run lint:fix
```

To format code manually:
```
npm run format:fix
```
