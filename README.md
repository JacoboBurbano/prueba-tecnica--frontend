# Frontend - Prueba Técnica

Este proyecto es el frontend de la prueba técnica, desarrollado en **React** con **TypeScript**. Se encarga de gestionar la interfaz de usuario para la creación y consulta de usuarios y actividades, consumiendo la API proporcionada por el backend.

## Tecnologías Utilizadas
- **React** con **TypeScript**
- **Axios** para las peticiones HTTP
- **React Router** para la navegación
- **CSS puro** para los estilos

## Características Implementadas
- **Registro de Usuarios**: Formulario para ingresar nuevos usuarios.
- **Registro de Actividades**: Formulario donde se asocia una actividad a un usuario.
- **Búsqueda de Usuarios y Actividades**: Se puede buscar usuarios y actividades con filtros dinámicos.
- **Interfaz Responsiva**: Adaptada para diferentes tamaños de pantalla.

## Instalación y Ejecución
Para correr el proyecto en local, sigue estos pasos:

1. Clonar el repositorio:
   ```bash
   git clone <repo_url>
   cd activities
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Ejecutar la aplicación:
   ```bash
   npm run dev
   ```

## Despliegue
El proyecto ha sido desplegado en **Vercel** y puede accederse en la siguiente URL:

🔗 [Frontend Deploy](https://prueba-tecnica-frontend-three.vercel.app/)

## Mejoras Pendientes
- Implementar gráficos para visualizar estadísticas.
- Mejorar la autenticación y manejo de sesiones.
- Optimizar el rendimiento en la carga de datos.


  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
