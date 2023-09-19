# Eventmakers API Documentation

## Authentication

### User Registration
Endpoint: https://eventmakers-api.vercel.app/api/auth/register <br>
Method: `POST` <br>
Headers: Content-Type: application/json <br>
Body: { name, email, password } 

### User Login
Endpoint: https://eventmakers-api.vercel.app/api/auth/login <br>
Method: `POST` <br>
Headers: Content-Type: application/json <br>
Body: { email, password }

## Events

### List Many Event
Endpoint: https://eventmakers-api.vercel.app/api/event <br>
Method: `GET`

### List Single Event
Endpoint: https://eventmakers-api.vercel.app/api/event/:id <br>
Method: `GET`

### Create Event
Endpoint: https://eventmakers-api.vercel.app/api/event/:id <br>
Method: `POST` <br>
Headers: Content-Type: application/json <br>
Body: { name,description, location, date, authorId }

### Join Event
Endpoint: https://eventmakers-api.vercel.app/api/join-event <br>
Method: `POST` <br>
Headers: Content-Type: application/json <br>
Body: { name, email, phone, eventId }
