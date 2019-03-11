![Logo of the project](./docs/images/bandit.png)

# band.it &middot; [![CircleCI](https://circleci.com/gh/band-its/band.it.svg?style=shield)](https://circleci.com/gh/band-its/band.it) [![codecov](https://codecov.io/gh/band-its/band.it/branch/develop/graph/badge.svg)](https://codecov.io/gh/band-its/band.it) [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Maintainability](https://api.codeclimate.com/v1/badges/c41d0b75884bd268f51d/maintainability)](https://codeclimate.com/github/band-its/band.it/maintainability)

> OpenSource Music colaboration tool, band it!

On Band.it musicians can coolaborate and create music by joining tracks, publish albums and create new bands. 

## Installing / [Getting started](https://github.com/band-its/band.it/wiki/Getting-started)
You need to download repo to your disk. Then run all with docker-compose:

```shell
git clone https://github.com/band-its/band.it.git
cd band.it/
docker-compose up
```

The above commands are used to download the repository and run docker-compose. All images will be downloaded.

## Developing

### Built With

Backend:
* Spring Boot 2.1.3
* Gradle 5.2

Frontend:
* Angular 7.2
* Bootstrap 4.3 (with ng-boostrap) 

### Prerequisites
You need Java Development Kit 11 ([OracleJDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html) or [OpenJDK](https://jdk.java.net/11/)), [NodeJS >10.15.3](https://nodejs.org/en/download/) and [Docker](https://www.docker.com/products/docker-desktop) installed.

### Setting up Dev

Backend:
Don't need to setting something up. Just use this to build all modules:

```shell
./gradlew build -x test
```

To build without tests add a <i>-x test</i> flag. You can also build



Frontend:
You should have running the backend to start development of frontend. You can run it with docker-compose.
```shell
docker-compose up
```

Then go to the frontend module, install dependencies and you can start the app.
```shell
cd frontend/
npm install
ng serve
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./gradlew build -x test
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

Here again you should state what actually happens when the code above gets
executed.

### Deploying / Publishing
CircleCI will take care of this.

give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
./gradlew clean check
```

E2E tests:
```shell
./gradlew testE2E
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.


## Database

Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc... 

## Licensing

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details
