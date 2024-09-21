# Node.js Backend Starter

A robust Node.js backend starter project with essential configurations and tools for code quality and development efficiency.

## Features

- Node.js backend setup
- ESLint for code linting
- Prettier for code formatting
- Husky for pre-commit hooks
- (Upcoming) CI/CD pipelines for linting and test cases
- (Upcoming) Dockerfile for containerization

## Getting Started

### Prerequisites

- Node.js (version v20.10.0)
- npm (version 10.2.3)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Chaitanya1672/backend-starter-template.git
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

## Upcoming Features

- CI/CD pipelines for automated linting and testing
- Dockerfile for easy containerization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
