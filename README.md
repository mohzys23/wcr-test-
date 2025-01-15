Here's the updated `README.md` without the Dockerfile explanation, focusing just on the process to run it:

# wcr-frontend

The `wcr-frontend` is an Angular application designed for [your app description]. This guide will show you how to run the app both locally and in a Docker container.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Running Locally](#running-locally)
- [Running with Docker](#running-with-docker)
- [Building the App](#building-the-app)
- [Testing](#testing)
- [Environment Variables
  ](#environment-variables)

---

## Prerequisites

Before getting started, make sure you have the following tools installed:

- **[Node.js](https://nodejs.org/)** (v14 or later)
- **[npm](https://www.npmjs.com/)** (comes with Node.js)
- **[Docker](https://www.docker.com/)** (for containerized environment)

---

## Running Locally

To run the Angular app locally on your machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/mohzys23/wcr-test-.git
cd wcr-frontend
```

### 2. Install Dependencies

Install all necessary dependencies using `npm`:

```bash
npm install
```

### 3. Start the Development Server

Run the following command to start the app:

```bash
ng serve
```

### 4. Access the App

Open your browser and go to:

```
http://localhost:4200
```

You can now access the app locally. It will automatically reload if you make any changes to the source code.

---

## Running with Docker

To run the Angular app within a Docker container, follow these steps:

### 1. Build the Docker Image

To build the Docker image, run the following command in the project root:

```bash
docker build -t wcr-frontend .
```

This will create a Docker image named `wcr-frontend`.

### 2. Run the Docker Container

Run the app in a Docker container with the following command:

```bash
docker run -p 80:80 wcr-frontend
```

This maps port 80 of the container to port 80 on your local machine. You can change the port mapping as needed (e.g., `-p 8080:80`).

### 3. Access the App

Once the container is running, open your browser and visit:

```
http://localhost
```

The app should now be accessible within the container.

---

## Building the App

To create a production build of the app, run:

```bash
ng build --production
```

The compiled files will be available in the `dist/` directory.

---

## Testing

### Unit Tests

To run unit tests using **Karma** and  **Jasmine** , use the following command:

```bash
ng test
```

This will run the unit tests in watch mode. To stop the tests, press `Ctrl + C`.

### End-to-End Tests

For end-to-end testing, **Protractor** is used:

```bash
ng e2e
```

This will execute the end-to-end tests on a live instance of the app.

---

## Environment Variables

You can configure environment-specific variables in the `src/environments` folder:

* `environment.ts` for development environment
* `environment.prod.ts` for production environment

Example of `environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

Modify the `apiUrl` or any other configuration for your specific needs.
