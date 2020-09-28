# Product Grid

Basic product grid that works across all devices and that links through to a product information page.
This application has moked authentication,
where logged in user is selected in a droplist.
Currently seleted user is stored in Redux.

## Setup

To run this software locally, you need Docker.
You can start this [docker-compose configuration](./docker-compose.yml),
However it is recommended to use make commands to start the development environment.
 
If you want to start all the services it for the first time,
simply run:

    make up install up logs

Later is enough to run:

    make up logs

This will start development version of the web application on
[localhost:3000](http://localhost:3000).
The backend will be running on [localhost:3001/graphql](http://localhost:3001/graphql).

Backend and image server URLs are configurable through environment variables.
For example this software has been deployed on:
[product-grid.herokuapp.com](https://product-grid.herokuapp.com).

### GraphQL types

This application uses Apollo codegen to generate types.
Types are stored in [_graphql](./_graphql/) directory.
This directory should be added to version control.
Everytime GraphQL queries that are tagged inside the code are changed,
the types needs to be regenerated, for that use this command:

    make codegen

### Test with Jest

To run tests use this command:

    make up-frontend test

### Shell into containers

To perform development tasks inside containers,
there are shorthand commands to run bash feom within running containers:

    make into-frontend
    # Here you can run:
    $ npm run codegen
    $ npm test -- --verbose

    make into-backend

    make into-mongo

    make into-mongo-db
    # The last command will log you into mongo client,
    # so you can run mongo commands over there like this:
    > db.getCollection('properties').remove({})

