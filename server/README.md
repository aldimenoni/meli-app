## Servidor
Proyecto para la creacion de APIS con:

- [ExpressJS](https://expressjs.com/es/)
- [Axios](https://axios-http.com/docs/intro).

Apis creadas:
 - (GET) /items Params: {query, offset, limit}
 - (GET) /items/:id Params: {id}
 - (GET) /items/:id/description Params: {id}

Las mismas consumen los siguientes endpoints 
 - https://api.mercadolibre.com/sites/MLA/search?q=:query
 - https://api.mercadolibre.com/items/:id
 - https://api.mercadolibre.com/items/:id/description

### Getting Started

Instalar dependencias: 
``` bash
npm install
```

Iniciar el servidor :

```bash
npm start
```

Abrir [http://localhost:4000](http://localhost:4000) con el navegador para interactuar con las apis:
 
 - (GET) /items Ejemplo: http://localhost:4000/items?q=moto&offset=0&limit=4
 - (GET) /items/:id Ejemplo: http://localhost:4000/items/MLA1131660025
 - (GET) /items/:id/description Ejemplo: http://localhost:4000/items/MLA1131660025/description

### Estructura de proyecto

- `controllers`
- `routes`
- `index`
