# api-typescript
An API to manage vehicles created with typescript.

## Facility

Make sure you have Node.js and npm installed. Then run:

```bash
npm installation
```

# setting
```
PORT=your_port
JWT_SECRETA=your_encryption_cave
DB_URI=your_bd_uri
```

# Wear

To start the API, run:
```
npm run dev
```


# endpoints

The main API endpoints are detailed below:

### Get all vehicles

- **Method:** `GET`
- **Path:** `/items`
- **Description:** Gets all the notes.

### Get a vehicle by ID

- **Method:** `GET`
- **Path:** `/item/:id`
- **Description:** Get a specific vehicle for your ID.

### Create a new vehicle

- **Method:** `POST`
- **Path:** `/item`
- **Description:** Create a new vehicle.

### Delete a vehicle

- **Method:** `DELETE`
- **Path:** `/item/:id`
- **Description:** Deletes a specific vehicle by its ID.

### Edit vehicle information

- **Method:** `PUT`
- **Path:** `/item/:id`
- **Description:** Change the information of a vehicle

### Create a new user

- **Method:** `POST`
- **Path:** `/auth/register`
- **Description:** Create a new user.

### Access

- **Method:** `POST`
- **Path:** `/auth/login`
- **Description:** Sign in and get an authentication token.


### Example request (using cURL)
- **curl http://localhost:3000/items**