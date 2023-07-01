# URL Shortener Service - Development

## Description

The URL Shortener is a frontend web application designed on JS(TS) and React 18 setup.

## Tech Documentation

This project built on SPA Reach Architecture. 

Technical stack includes
1. JavaScript + TypesScript 
2. React 18
3. Jest for unit tests 
4. Cypress for e2e

## Next steps (TBD)

As a next steps of this project we need to:
1. Define proper docker config and ci/cd.
2. Resolve URLs and dynamic data via environment variables
3. Implement contract testing


## Getting Started

To get started with the URL Shortener, follow the steps below:

1. Clone the repository: `git clone https://github.com/DenisovAndrey/url-shortener-frontend`
2. Install dependencies:
    1. Switch to Node 18
    2. Run `npm install`
3. Configure env variables and [api](https://github.com/DenisovAndrey/url-shortener-service) url
4. Start the server: `npm run start:dev`
5. Access the URL Shortener interface by visiting `http://localhost:3000`

## Available Scripts

In the project directory, you can run:

### `npm run start:dev`

Runs the project in the development mode.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run start`

Runs app that was build.

### `npm run test`

Launches the unit test runner.

### `npm run lint`

Launches ES linter.

### `npm run test:e2e`

Launches E2E tests via cypress.

### `test:e2e:open`

Launches cypress dashboard.
