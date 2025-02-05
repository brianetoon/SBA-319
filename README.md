# SBA 319 - MongoDB Database Application

## Project Summary

This project showcases proficiency in MongoDB by implementing its features in a practical way. A RESTful API was built using Node.js and Express, with Mongoose managing schema definitions for each database collection. Models for Users, Recipes, and Comments were created based on their respective schemas to enforce structure and validation rules on documents stored in the database.

## Project Objectives

- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes.
- Use MongoDB indexing to make efficient queries.
- Create MongoDB validation rules.
- Use MongoDB validation to ensure data consistency.

## Project Requirements

- Use at least three different data collections within the database.
- Utilize reasonable data modeling practices.
- Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.
- Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.
- Create PATCH or PUT routes for data, as appropriate, using appropriate update  commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.
- Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.
- Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.
- Include sensible MongoDB data validation rules for at least one data collection (Mongoose Schema).
- Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.
- Use Mongoose to implement your application.
- Utilize reasonable code organization practices.
- Ensure that the program runs without errors.
- Include a README file that contains a description of your application.
- This README must include a description of your API's available routes and their corresponding CRUD operations for reference.

## Application Details

This project is a RESTful API built with Node.js and Express, using MongoDB as the database. The backend is structured as follows:

- MongoDB for data storage.
- Express.js for handling API routing and requests.
- Mongoose for defining schemas and models for the three collections: Users, Recipes, and Comments.
- Dedicated controllers for each collection, managing different API requests at their respective routes.
- Indexing: An index was created on the userId field in the Recipes collection (recipeSchema.index({ userId: 1 })) to optimize queries when retrieving all recipes posted by a specific user.

The API follows RESTful principles, supporting CRUD (Create, Read, Update, Delete) operations for each resource while maintaining a modular code structure.

### Available Routes

#### Recipes Routes: ```/api/recipes```

- Get all recipes (READ): GET ```/``` 
- Get a recipe by ID (READ): GET ```/:id```
- Create a recipe (CREATE): POST ```/```
- Update a recipe (UPDATE): PATCH ```/```
- Delete a recipe (DELETE): DELETE ```/:id```

#### Users Routes: ```/api/users```

- Get all users (READ): GET ```/``` 
- Get a user by ID (READ): GET ```/:id```
- Create a user (CREATE): POST ```/```
- Delete a user (DELETE): DELETE ```/:id```

#### Comments Routes: ```/api/comments```

- Get all comments (READ): GET ```/``` 
- Create a comment (CREATE): POST ```/```
- Delete a comment (DELETE): DELETE ```/:id```
