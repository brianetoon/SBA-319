# SBA 319 - MongoDB Database Application

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
- Utilize reasonable code organization practices.
- Ensure that the program runs without errors.
- Include a README file that contains a description of your application.
- This README must include a description of your API's available routes and their corresponding CRUD operations for reference.
- **Bonus:** Use Mongoose to implement your application.
