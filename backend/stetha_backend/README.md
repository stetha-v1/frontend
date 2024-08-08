Register a new user:

curl -X POST -H "Content-Type: application/json" -d '{"username": "testuser", "password": "testpassword", "email": "test@example.com"}' http://localhost:8000/api/register/


To Login with the registered user (using username or email) and get the authentication token:

curl -X POST -H "Content-Type: application/json" -d '{"username": "testuser", "password": "testpassword"}' http://localhost:8000/api/login/


To Logout using the authentication token:

curl -X POST -H "Authorization: Token AUTHTOKEN" http://localhost:8000/api/logout/