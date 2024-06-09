Sure, here is the documentation in Markdown format:

```markdown
# BreachFix API Documentation

## Introduction

Welcome to the BreachFix API documentation. This API allows users to manage movies, lists, and user information. The API supports various operations such as creating, reading, updating, and deleting data. Authentication is required for certain operations.

## Base URL

```
http://your-api-base-url.com/api
```

## Authentication

Authentication is done using JSON Web Tokens (JWT). Include the token in the `Authorization` header as a Bearer token.

Example:
```
Authorization: Bearer <your_jwt_token>
```

## Environment Setup

Ensure to set up the following environment variables in your `.env` file:

```env
MONGO_URL=your_mongo_db_url
SECRET_KEY=your_secret_key
```

## Endpoints

### User Endpoints

#### Register

- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "string",
    "username": "string",
    "email": "string",
    "profilePic": "string",
    "isAdmin": "boolean",
    "createdAt": "date",
    "updatedAt": "date",
    "__v": 0
  }
  ```

#### Login

- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Login a user.
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "string",
    "username": "string",
    "email": "string",
    "profilePic": "string",
    "isAdmin": "boolean",
    "createdAt": "date",
    "updatedAt": "date",
    "__v": 0,
    "accessToken": "string"
  }
  ```

#### Update User

- **URL:** `/users/:id`
- **Method:** `PUT`
- **Description:** Update a user's information.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "profilePic": "string"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "string",
    "username": "string",
    "email": "string",
    "profilePic": "string",
    "isAdmin": "boolean",
    "createdAt": "date",
    "updatedAt": "date",
    "__v": 0
  }
  ```

#### Delete User

- **URL:** `/users/:id`
- **Method:** `DELETE`
- **Description:** Delete a user.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User has been deleted..."
  }
  ```

### Movie Endpoints

#### Create Movie

- **URL:** `/movies`
- **Method:** `POST`
- **Description:** Create a new movie. (Admin only)
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Request Body:**
  ```json
  {
    "title": "string",
    "desc": "string",
    "img": "string",
    "imgTitle": "string",
    "imgSm": "string",
    "trailer": "string",
    "video": "string",
    "year": "string",
    "limit": "number",
    "genre": "string",
    "isSeries": "boolean"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "string",
    "title": "string",
    "desc": "string",
    "img": "string",
    "imgTitle": "string",
    "imgSm": "string",
    "trailer": "string",
    "video": "string",
    "year": "string",
    "limit": "number",
    "genre": "string",
    "isSeries": "boolean",
    "createdAt": "date",
    "updatedAt": "date",
    "__v": 0
  }
  ```

#### Get Movie by ID

- **URL:** `/movies/find/:id`
- **Method:** `GET`
- **Description:** Get a movie by ID.
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "string",
    "title": "string",
    "desc": "string",
    "img": "string",
    "imgTitle": "string",
    "imgSm": "string",
    "trailer": "string",
    "video": "string",
    "year": "string",
    "limit": "number",
    "genre": "string",
    "isSeries": "boolean",
    "createdAt": "date",
    "updatedAt": "date",
    "__v": 0
  }
  ```

#### Update Movie

- **URL:** `/movies/:id`
- **Method:** `PUT`
- **Description:** Update a movie. (Admin only)
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Request Body:**
  ```json
  {
    "title": "string",
    "desc": "string",
    "img": "string",
    "imgTitle": "string",
    "imgSm": "string",
    "trailer": "string",
    "video": "string",
    "year": "string",
    "limit": "number",
    "genre": "string",
    "isSeries": "boolean"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "string",
    "title": "string",
    "desc": "string",
    "img": "string",
    "imgTitle": "string",
    "imgSm": "string",
    "trailer": "string",
    "video": "string",
    "year": "string",
    "limit": "number",
    "genre": "string",
    "isSeries": "boolean",
    "createdAt": "date",
    "updatedAt": "date",
    "__v": 0
  }
  ```

#### Delete Movie

- **URL:** `/movies/:id`
- **Method:** `DELETE`
- **Description:** Delete a movie. (Admin only)
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Response:**
  ```json
  {
    "message": "The movie has been deleted..."
  }
  ```

#### Get All Movies

- **URL:** `/movies`
- **Method:** `GET`
- **Description:** Get all movies. (Admin only)
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Response:**
  ```json
  [
    {
      "_id": "string",
      "title": "string",
      "desc": "string",
      "img": "string",
      "imgTitle": "string",
      "imgSm": "string",
      "trailer": "string",
      "video": "string",
      "year": "string",
      "limit": "number",
      "genre": "string",
      "isSeries": "boolean",
      "createdAt": "date",
      "updatedAt": "date",
      "__v": 0
    },
    ...
  ]
  ```

### List Endpoints

#### Create List

- **URL:** `/lists`
- **Method:** `POST`
- **Description:** Create a new list. (Admin only)
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Request Body:**
  ```json
  {
    "title": "string",
    "type": "string",
    "genre": "string",
    "content": ["string"]
  }
  ```
- **Response:**
  ```json
  {
    "_id": "string",
    "title": "string",
    "type": "string",
    "genre": "string",
    "content": ["string"],
    "createdAt": "date",
    "updatedAt": "date",
    "__v": 0
  }
  ```

#### Delete List

- **URL:** `/lists/:id`
- **Method:** `DELETE`
- **Description:** Delete a list. (Admin only)
- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Response:**
  ```json
  {
    "message": "The list has been deleted..."
  }
  ```

#### Get All Lists

- **URL:** `/lists`
- **Method:** `GET`
- **Description:** Get all lists.


- **Headers:**
  ```json
  {
    "Authorization": "Bearer <your_jwt_token>"
  }
  ```
- **Query Parameters:**
  - `type` (optional): Filter lists by type.
  - `genre` (optional): Filter lists by genre.
- **Response:**
  ```json
  [
    {
      "_id": "string",
      "title": "string",
      "type": "string",
      "genre": "string",
      "content": ["string"],
      "createdAt": "date",
      "updatedAt": "date",
      "__v": 0
    },
    ...
  ]
  ```

### Example Usage in JavaScript

Here's an example of how to use the Fetch API to interact with the API:

```javascript
// Function to fetch all movies (Admin only)
async function fetchAllMovies() {
    const response = await fetch('http://your-api-base-url.com/api/movies', {
        headers: {
            'Authorization': 'Bearer your_jwt_token'
        }
    });

    if (response.ok) {
        const movies = await response.json();
        console.log(movies);
    } else {
        console.error('Failed to fetch movies');
    }
}

// Function to fetch a random movie
async function fetchRandomMovie() {
    const response = await fetch('http://your-api-base-url.com/api/movies/random', {
        headers: {
            'Authorization': 'Bearer your_jwt_token'
        }
    });

    if (response.ok) {
        const movie = await response.json();
        console.log(movie);
    } else {
        console.error('Failed to fetch random movie');
    }
}

// Function to create a new user
async function registerUser(username, email, password) {
    const response = await fetch('http://your-api-base-url.com/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    if (response.ok) {
        const newUser = await response.json();
        console.log(newUser);
    } else {
        console.error('Failed to register user');
    }
}

// Example calls
fetchAllMovies();
fetchRandomMovie();
registerUser('exampleUser', 'user@example.com', 'password123');
```

### Notes

- Replace `your_jwt_token` with a valid JWT token obtained from the login endpoint.
- Replace `http://your-api-base-url.com/api` with the actual base URL of your API.

## Conclusion

This documentation provides a detailed overview of the API endpoints and how to use them. If you have any questions or need further assistance, please contact the API support team.
```

This Markdown file is designed to be comprehensive and user-friendly, guiding users through the process of accessing and using your API with clear examples and detailed endpoint descriptions.
