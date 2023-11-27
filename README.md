# Powerplantsystem
This project is a virtual power plant system that aggregates distributed power sources into a single cloud-based energy provider. It consists of a Node.js REST API for handling battery data and a React/Next.js frontend for battery creation, listing, and statistics.


## Features

- **API Endpoint for Battery Creation:**
  - Accepts a list of batteries in the HTTP request body, each containing name, postcode, and watt capacity.
  - Persists battery data in MongoDB.

- **API Endpoint for Battery Listing:**
  - Accepts a postcode range, filter, and search parameters.
  - Returns a list of batteries sorted alphabetically.
  - Provides statistics such as total and average watt capacity.

  ## Technologies Used
  - Node.js
  - Express.js
  - MongoDB (for data persistence)
  - Mongoose (for MongoDB interactions)
    - TypeScript


  ## Getting Started

  - npm start dev  to run the project use command

 **Clone the Repository:**
   ```bash
   git clone https://github.com/watchmahesh/power-plant-backend

    ## TO DO
- Unit tests
