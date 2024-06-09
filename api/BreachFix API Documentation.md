

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

- **

URL:** `/lists`
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
import axios from "axios";

// Create an axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Function to fetch all movies (Admin only)
export const fetchAllMovies = async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await axiosInstance.get("/movies", {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

// Function to fetch a random movie
export const fetchRandomMovie = async (type) => {
  try {
    const response = await axiosInstance.get(`/movies/random?type=${type}`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    console.log(response.data);
    return response.data[0];
  } catch (error) {
    console.error('Failed to fetch random movie:', error);
  }
};

// Function to create a new user
export const registerUser = async (user) => {
  try {
    const response = await axiosInstance.post("/auth/register", user);
    console.log(response.data);
  } catch (error) {
    console.error('Failed to register user:', error);
  }
};

// Example calls
fetchAllMovies();
fetchRandomMovie('movie');
registerUser({ username: 'exampleUser', email: 'user@example.com', password: 'password123' });
```

### Notes

- Replace `your_jwt_token` with a valid JWT token obtained from the login endpoint.
- Replace `http://your-api-base-url.com/api` with the actual base URL of your API.

## Conclusion

This documentation provides a detailed overview of the API endpoints and how to use them. If you have any questions or need further assistance, please contact the API support team.
```

This documentation now includes a comprehensive overview of the API endpoints, example usage in JavaScript, and details on how to handle authentication and CRUD operations in a React application.
