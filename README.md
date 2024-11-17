<<<<<<< HEAD
# Singularity Health Test

Este es el repositorio de la prueba técnica **Singularity Health**. La aplicación está desarrollada utilizando **React**, **Vite** y otras herramientas modernas como **TailwindCSS**, **Radix UI**, y **Redux**. Este documento proporciona instrucciones para ejecutar la aplicación y un resumen de las herramientas utilizadas.

---

## 🛠️ Tecnologías Utilizadas

### Dependencias principales

- **React**: Framework de interfaz de usuario.
- **React Router Dom**: Manejo de rutas para navegación en la aplicación.
- **Redux Toolkit**: Manejo del estado global.
- **React Hook Form**: Manejo de formularios y validación.
- **Zod**: Validación de esquemas.
- **Radix UI**: Componentes de interfaz accesibles y estilizados.
- **TailwindCSS**: Framework de diseño para estilos.

### Herramientas adicionales

- **Axios**: Cliente HTTP para realizar peticiones.
- **Lucide-react**: Iconos SVG para diseño.

### Desarrollo y configuración

- **Vite**: Herramienta de desarrollo rápida y ligera.
- **ESLint**: Linter para asegurar buenas prácticas en el código.
- **TypeScript**: Añade tipado estático al código JavaScript.
- **PostCSS/Autoprefixer**: Procesamiento de CSS para compatibilidad con navegadores.

---

## 🚀 Instrucciones de Ejecución

Sigue estos pasos para ejecutar la aplicación localmente:

### 1. Clonar el repositorio

```bash
git clone <URL-del-repositorio>
cd singularity-health-test
```

### 2. Instalar dependencias

Asegúrate de tener Node.js y npm instalados. Luego, ejecuta:

```bash
npm install
```

### 3. Ejecutar la aplicación en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

## ✨ Detalles de Implementación

### 1. Arquitectura del Proyecto

La aplicación sigue una arquitectura modular basada en características, con separación clara de responsabilidades:

- **Components**: Componentes reutilizables y atómicos
- **Pages**: Vistas principales de la aplicación
- **Hooks**: Lógica reutilizable
- **Store**: Estado global y lógica de Redux
- **Utils**: Funciones auxiliares

### 2. Gestión de Estado

- Uso de Redux para estado global
- Estados locales con useState donde sea apropiado
- Manejo de formularios con React Hook Form
- Validaciones con Zod

### 3. Estilos y UI

- TailwindCSS para estilos base
- Componentes de Radix UI para interfaz accesible

---

## 📂 Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   └── ui/             # Componentes de interfaz básicos
├── hooks/              # Hooks personalizados
├── pages/              # Páginas de la aplicación
├── store/              # Configuración de Redux
│   └── slices/         # Redux slices
│
├── lib/                # Servicios externos y utilidades de composición




public/
├── assets/            # Recursos estáticos
```

---
=======
# -singularity-health-test
>>>>>>> 1e5aa423029145bbc0b7b7aedece935eb3418bb2
