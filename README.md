# Skating Journal

Skating Journal is a full-stack application for tracking skating practice sessions, logging progress, and reviewing past entries in one place.

## Features

- Create, edit, and view practice entries
- Browse entries in a calendar-style interface
- Use mock data during frontend development
- Store journal data through a Spring Boot API backed by MongoDB

## Tech Stack

- Frontend: Angular 22
- Backend: Spring Boot
- Database: MongoDB
- Testing: Vitest for the frontend and Maven tests for the backend

## Project Structure

- backend/ — Spring Boot API and database integration
- frontend/ — Angular application and UI components

## Prerequisites

- Node.js and npm
- Java 17+
- MongoDB running locally

## Getting Started

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

The API runs at http://localhost:8080.

### Frontend

```bash
cd frontend
npm install
npm start
```

The app runs at http://localhost:4200.

### Mock mode

```bash
cd frontend
ng serve --configuration=mock
```

## Development Commands

```bash
cd frontend
npm run build
npm test
```

```bash
cd backend
./mvnw test
```
