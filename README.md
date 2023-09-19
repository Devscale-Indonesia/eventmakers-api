# Eventmakers API Documentation

## Authentication

### User Registration
Endpoint: https://eventmakers-api.vercel.app/api/auth/register <br>
Method: `POST` <br>
Headers: Content-Type: application/json <br>
Body: { name, email, password } <br>
Note: `We do not encrypt your password, don't use real password`

### User Login
Endpoint: https://eventmakers-api.vercel.app/api/auth/login <br>
Method: `POST` <br>
Headers: Content-Type: application/json <br>
Body: { email, password }

### JWT Verification
JWT valid for 7 days <br>
secretkey: secret1234567890

## Events

### List Many Event
Endpoint: https://eventmakers-api.vercel.app/api/event <br>
Method: `GET`

### List Single Event
Endpoint: https://eventmakers-api.vercel.app/api/event/:id <br>
Method: `GET`

### Create Event
Endpoint: https://eventmakers-api.vercel.app/api/event <br>
Method: `POST` <br>
Headers: Content-Type: application/json <br>
Body: { name,description, location, date, authorId }

### Join Event
Endpoint: https://eventmakers-api.vercel.app/api/join-event <br>
Method: `POST` <br>
Headers: Content-Type: application/json <br>
Body: { name, email, phone, eventId }
