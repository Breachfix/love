API Documentation
Introduction
This API allows users to manage movies, lists, and user information. The API supports various operations such as creating, reading, updating, and deleting data. Authentication is required for certain operations.

Base URL
arduino
Copy code
http://your-api-base-url.com/api
Authentication
Authentication is done using JSON Web Tokens (JWT). Include the token in the Authorization header as a Bearer token.

Example:

makefile
Copy code
Authorization: Bearer <your_jwt_token>
Endpoints
User Endpoints
Register
URL: /auth/register
Method: POST
Description: Register a new user.
Request Body:
json
Copy code
{
  "username": "string",
  "email": "string",
  "password": "string"
}
Response:
json
Copy code
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
Login
URL: /auth/login
Method: POST
Description: Login a user.
Request Body:
json
Copy code
{
  "email": "string",
  "password": "string"
}
Response:
json
Copy code
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
Movie Endpoints
Create Movie
URL: /movies
Method: POST
Description: Create a new movie. (Admin only)
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_jwt_token>"
}
Request Body:
json
Copy code
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
Response:
json
Copy code
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
Get Movie by ID
URL: /movies/find/:id
Method: GET
Description: Get a movie by ID.
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_jwt_token>"
}
Response:
json
Copy code
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
Get All Movies
URL: /movies
Method: GET
Description: Get all movies. (Admin only)
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_jwt_token>"
}
Response:
json
Copy code
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
List Endpoints
Create List
URL: /lists
Method: POST
Description: Create a new list. (Admin only)
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_jwt_token>"
}
Request Body:
json
Copy code
{
  "title": "string",
  "type": "string",
  "genre": "string",
  "content": ["string"]
}
Response:
json
Copy code
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
Get All Lists
URL: /lists
Method: GET
Description: Get all lists.
Headers:
json
Copy code
{
  "Authorization": "Bearer <your_jwt_token>"
}
Query Parameters:
type (optional): Filter lists by type.
genre (optional): Filter lists by genre.
Response:
json
Copy code
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
Example Usage in JavaScript
Here's an example of how to use the Fetch API to interact with the API:

javascript
Copy code
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
Notes
Replace your_jwt_token with a valid JWT token obtained from the login endpoint.
Replace http://your-api-base-url.com/api with the actual base URL of your API.
This documentation provides a basic overview of the API endpoints and how to use them with the Fetch API. You can expand on this by adding more details about error handling, additional endpoints, and other relevant information.









ChatGPT can make mistakes. Check important info.
