# Film-test

Film-test es una aplicación web desarrollada con Vue 3, TypeScript, Pinia y Vite. La aplicación permite a los usuarios explorar películas y series populares, ver detalles y obtener información adicional.

![Film-test Logo](src/assets/back.png)

## Arquitectura de Archivos

La estructura del proyecto está organizada de la siguiente manera

- **src/**: Contiene el código fuente principal.
  - `main.py`: Archivo principal del proyecto.
  - `utils/**`: Herramientas y utilidades.
- **tests/**: Pruebas unitarias y de integración.
- **README.md**: Este archivo.

## Vistas

### MovieIdView.vue

- **Funcionalidad**: Muestra los detalles de una película específica, incluyendo su título, descripción, popularidad, comentarios de usuarios y más.
- **Componentes**: Utiliza componentes como `CardMovie` para mostrar información de manera estructurada.

### Otras Vistas

- **HomeView.vue**: Página principal que muestra una lista de películas y series populares.
- **SeriesView.vue**: Página que muestra una lista de series populares.

## Tecnologías Usadas

- **Vue 3**: Framework de JavaScript para construir interfaces de usuario.
- **TypeScript**: Lenguaje de programación que añade tipos estáticos a JavaScript.
- **Pinia**: Biblioteca de gestión de estado para Vue.
- **Vite**: Herramienta de construcción rápida para proyectos de frontend.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **Sass**: Preprocesador CSS para escribir estilos de manera más eficiente.
- **ESLint**: Herramienta de análisis estático para encontrar y arreglar problemas en el código JavaScript.
- **Prettier**: Formateador de código para mantener un estilo consistente.
- **Vitest**: Framework de pruebas unitarias para proyectos de frontend.

## Instalación y Despliegue

### Requisitos Previos

- Node.js (versión 14 o superior)
- PNPM (gestor de paquetes)

### Instalación

1. Clona el repositorio:

```sh
git clone https://github.com/tu-usuario ...
```

```sh
cd doonamis-app
```

2. Instala las dependencias:

```sh
pnpm install
```

3. Ejecución en Desarrollo
   Para iniciar el servidor de desarrollo, ejecuta:

```sh
pnpm run dev
```

Construcción para Producción
Para construir la aplicación para producción, ejecuta:

```sh
pnpm run build
```

Enlace a Producción
Enlace a la aplicación en producción
[Film-test](https://film-test-r6nl-git-main-johanbautistas-projects.vercel.app/)

Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
