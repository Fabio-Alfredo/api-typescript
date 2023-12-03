# api-typescript
Una API para gestionar vehiculos creada con typescript.

## Instalación

Asegúrese de tener Node.js y npm instalados. Entonces corre:

```bash
instalación npm
```

# configuración
```
PUERTO=tu_puerto
JWT_SECRETA=tu_cueva_de_cifrado
DB_URI=tu_uri_bd
```

# Usar

Para iniciar la API, ejecute:
```
npm run dev
```


# puntos finales

Los principales endpoints finales de la API se detallan a continuación:

### Obtener todas los vehiculos

- **Método:** `OBTENER`
- **Ruta:** `/items`
- **Descripción:** Obtiene todas las notas.

### Obtener una vehiculo por ID

- **Método:** `OBTENER`
- **Ruta:** `/item/:id`
- **Descripción:** Obtiene un vehiculo específica para su ID.

### Crear una nueva vehiculo

- **Método:** `POST`
- **Ruta:** `/item`
- **Descripción:** Crea un nuevo vehiculo.

### Eliminar un vehiculo

- **Método:** `BORRAR`
- **Ruta:** `/item/:id`
- **Descripción:** Elimina un vehiculo específico por su ID.

### Editar informacion del vehiculo

- **Método:** `PUT`
- **Ruta:** `/item/:id`
- **Descripción:** Cambia la informacion de un vehiculo

### Crear un nuevo usuario

- **Método:** `POST`
- **Ruta:** `/auth/register`
- **Descripción:** Crear un nuevo usuario.

### Acceso

- **Método:** `POST`
- **Ruta:** `/auth/login`
- **Descripción:** Inicia sesión y obtén un token de autenticación.


### Ejemplo de solicitud (usando cURL)
- **curl http://localhost:3000/items**