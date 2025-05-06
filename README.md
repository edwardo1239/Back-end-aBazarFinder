# Backend - API REST del Sistema de Inventario y Carrito de Compras

API RESTful construida con Node.js y Express que gestiona el inventario de productos y las operaciones del carrito de compras.

## Características Principales

- 🔐 Validaciones robustas con Zod
- 📦 Gestión completa de productos (CRUD)
- 🛒 Operaciones del carrito de compras
- 🗄️ Base de datos MongoDB
- 🚀 Arquitectura escalable y mantenible
- ✨ Manejo de errores centralizado

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución
- **Express**: Framework web
- **MongoDB**: Base de datos NoSQL
- **Zod**: Validación de esquemas
- **Mongoose**: ODM para MongoDB
- **Cors**: Middleware para CORS
- **dotenv**: Manejo de variables de entorno

## Estructura del Proyecto

```
src/
├── app/              # Configuración principal
├── config/           # Configuraciones (MongoDB, etc.)
├── controllers/      # Controladores
├── middleware/       # Middlewares personalizados
├── routes/           # Definición de rutas
├── schemas/          # Esquemas y manejo de errores
├── services/         # Lógica de negocio
├── utils/            # Utilidades
└── validations/      # Validaciones con Zod
```

## Instalación y Configuración

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/inventario
   ```

3. Inicia el servidor:
   ```bash
   npm start
   ```

## Endpoints Principales

### Productos
- `GET /api/items`: Obtener todos los productos
- `GET /api/items/:id`: Obtener un producto por ID
- `POST /api/items`: Crear un nuevo producto
- `PUT /api/items/:id`: Actualizar un producto
- `DELETE /api/items/:id`: Eliminar un producto

### Carrito
- `GET /api/cart`: Obtener el carrito actual
- `POST /api/cart/add`: Agregar producto al carrito
- `PUT /api/cart/:id`: Actualizar cantidad
- `DELETE /api/cart/:id`: Eliminar del carrito

## Scripts Disponibles

- `npm start`: Inicia el servidor
- `npm run dev`: Inicia el servidor en modo desarrollo con nodemon
- `npm test`: Ejecuta los tests (cuando estén configurados)

## Validaciones

Utilizamos Zod para validar:
- Datos de entrada en productos
- Parámetros de consulta
- Formato de IDs
- Datos del carrito

## Manejo de Errores

Sistema centralizado de manejo de errores con:
- Errores HTTP estandarizados
- Mensajes de error descriptivos
- Logs detallados
- Respuestas consistentes

## Estado del Proyecto

🚧 En desarrollo activo

## Próximas Características

- [ ] Implementación de tests
- [ ] Autenticación de usuarios
- [ ] Sistema de roles y permisos
- [ ] Caché con Redis
- [ ] Documentación con Swagger

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu característica
3. Haz commit de tus cambios
4. Push a la rama
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

Para dudas o sugerencias, por favor abre un issue en el repositorio.