# Eventmakers API Documentation

## Authentication

### User Registration
Endpoint: https://eventmakers-api.vercel.app/api/auth/register
Method: `POST`
Headers: Content-Type: application/json
Body: { name, email, password }

### User Login
Endpoint: https://eventmakers-api.vercel.app/api/auth/login
Method: `POST`
Headers: Content-Type: application/json
Body: { email, password }

## Events

### List Many Event
Endpoint: https://eventmakers-api.vercel.app/api/event
Method: `GET`

### List Single Event
Endpoint: https://eventmakers-api.vercel.app/api/event/:id
Method: `GET`

### Create Event
Endpoint: https://eventmakers-api.vercel.app/api/event/:id
Method: `POST`
Headers: Content-Type: application/json
Body: { name,description, location, date, authorId }

### Join Event
Endpoint: https://eventmakers-api.vercel.app/api/join-event
Method: `POST`
Headers: Content-Type: application/json
Body: { name, email, phone, eventId }