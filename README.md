# Node Server Boilerplate

## Prerequisite
 - Node >= 16
 - Docker 
 - Docker compose

## Installation

Clone the repo:

```bash
git clone https://bitbucket.org/walterco/boilerplate-node-ts.git <new-repo-name>
cd <new-repo-name>
rm -rf ./.git
git remote add origin <new-repo-url>
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Commands

Build project:

```bash
npm run build
```

Running locally:

```bash
npm run start:dev
```

Running in production:

```bash
npm run start
```

Docker:

```bash
# run docker container
npm run docker:dev

```

Linting:

```bash
# run TSLint
npm run lint

# fix TSLint errors
npm run lint:fix
```


## Environment Variables

The environment variables can be found and modified in the `.env` file. Default environment variables are in the .env.example

## Project Structure

```
src\
 |--config\           # Environment variables and configuration related things
 |--controllers\      # Route controllers
 |--locales\          # Localization files
 |--docs\             # Swagger files
 |--middlewares\      # Custom express middlewares
 |----validations\    # Request data validation schemas
 |--migrations\       # Database migrations
 |--models\           # Models 
 |--repositories\     # Repositories (Data layer)
 |--routes\           # Routes
 |--seeds\            # Database seeds
 |--tests\            # Tests
 |--utils\            # Utility classes and functions
 |--index.ts          # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written in YAML files in docs folder.
