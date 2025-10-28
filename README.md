# CameraApp-UTP 📸

Aplicación móvil desarrollada con React Native y Expo que integra funcionalidades de cámara, catálogo de productos, autenticación de usuarios y gestión de perfil.

## 📋 Descripción

Este proyecto combina diferentes funcionalidades en una aplicación integral:
- **Captura de fotos** con la cámara del dispositivo
- **Historial de fotos** persistente con AsyncStorage
- **Catálogo de productos** con imágenes y precios
- **Sistema de autenticación** (Login)
- **Perfil de usuario** con información personalizada

## 🚀 Tecnologías y Dependencias

Esta aplicación fue desarrollada con **React Native** y **Expo**, integrando funcionalidades como cámara, autenticación, almacenamiento local y navegación.

### 🧩 Dependencias Principales

```json
{
  "expo": "^54.0.20",
  "react": "19.1.0",
  "react-native": "0.81.5"
}
```

### 🧭 Navegación

| Paquete                                 | Versión   | Descripción                            |
|----------------------------------------|-----------|----------------------------------------|
| `@react-navigation/native`             | ^7.1.19   | Navegación principal                   |
| `@react-navigation/native-stack`       | ^7.6.0    | Navegación tipo stack                  |
| `react-native-screens`                 | ~4.16.0   | Optimización de navegación             |
| `react-native-safe-area-context`       | ~5.6.0    | Manejo de áreas seguras en dispositivos |

### 📸 Funcionalidades

| Paquete                                         | Versión   | Descripción                         |
|------------------------------------------------|-----------|-------------------------------------|
| `expo-camera`                                  | ^17.0.8   | Acceso a la cámara del dispositivo |
| `@react-native-async-storage/async-storage`    | ^2.2.0    | Almacenamiento local persistente   |
| `@expo/vector-icons`                           | ^15.0.3   | Iconos para la interfaz             |

### 🛠️ Otras Dependencias

| Paquete              | Versión   | Descripción                          |
|----------------------|-----------|--------------------------------------|
| `expo-status-bar`    | ~3.0.8    | Personalización de la barra de estado |
| `react-native-web`   | ^0.21.0   | Compatibilidad con navegador web    |
| `react-dom`          | 19.1.0    | Renderizado en entorno web          |

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/BruGeth/lab11-dam.git

cd lab11-dam
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el proyecto:
```bash
npm start
```

## 🎯 Scripts Disponibles

- `npm start` o `npx expo start` - Inicia el servidor de desarrollo de Expo
- `npm run android` - Ejecuta la aplicación en un emulador/dispositivo Android
- `npm run ios` - Ejecuta la aplicación en un simulador/dispositivo iOS
- `npm run web` - Ejecuta la aplicación en el navegador web

## 📱 Capturas de Pantalla

### 🔐 Componentes de Login, Perfil y Catálogo

| Login                                                                 | Perfil                                                                | Catálogo                                                              |
|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------|
| ![Login Screen](https://github.com/user-attachments/assets/2ee2fd64-2a85-45ff-8029-215f8e46f74e) | ![Profile Screen](https://github.com/user-attachments/assets/92fa0bdf-fead-4293-aded-d3196ab5b105) | ![Catalog Screen](https://github.com/user-attachments/assets/6c86ed62-ef0d-4063-9db1-6239ccf25372) |
| Pantalla de autenticación de usuarios                                  | Visualización de información del usuario                              | Listado de productos con imágenes y precios                           |

### 📸 Componentes de Cámara y Historial

| Cámara                                                                | Historial                                                              |
|------------------------------------------------------------------------|------------------------------------------------------------------------|
| ![Camera Screen](https://github.com/user-attachments/assets/0e70e14e-89d8-46db-aba2-3a09f90b453c) | ![History Screen](https://github.com/user-attachments/assets/6088e5b1-a2fb-4323-8814-4cba6858df83) |
| Captura de fotos con la cámara del dispositivo                         | Galería de fotos capturadas previamente                                |

---

## 🔗 Proyectos Fuente

Este proyecto integra componentes de proyectos anteriores desarrollados independientemente:

### Lab 2 - Navegación y Pantallas Base
Pantallas de Login, Perfil y Catálogo fueron extraídas de:
- 🔗 [Repositorio Lab 2](https://github.com/BruGeth/lab02-dam.git)

### CameraApp - Funcionalidad de Cámara
Pantalla de Cámara y gestión de historial con AsyncStorage fueron extraídas de:
- 🔗 [Repositorio Cp 11 - CameraApp](https://github.com/BruGeth/cp11-dam.git)

## 🛠️ Estructura del Proyecto

```
CameraApp-UTP/
├── assets/
├── src/
│   ├── components/
│   │   └── HistoryList.js
│   ├── screens/
│   │   ├── CameraScreen.js
│   │   ├── CatalogScreen.js
│   │   ├── LoginScreen.js
│   │   └── ProfileScreen.js
│   ├── storage/
│       └── HistoryStorage.js
│   └── styles/
│       ├── CatalogStyles.js
│       ├── LoginStyles.js
│       └── ProfileStyles.js
├── App.js
├── package.json
└── README.md
```

## 📝 Funcionalidades Principales

### 1. Autenticación
- Sistema de login
- Validación de credenciales
- Navegación protegida

### 2. Perfil de Usuario
- Visualización de datos del usuario
- Navegación entre secciones
- Información personalizada

### 3. Catálogo de Productos
- Lista de productos con imágenes
- Información de precios
- Navegación detallada

### 4. Sistema de Cámara
- Captura de fotos en tiempo real
- Previsualización de fotos capturadas
- Guardado automático en el historial

### 5. Gestión de Historial
- Almacenamiento persistente con AsyncStorage
- Visualización de fotos anteriores
- Eliminación de fotos del historial

## 👨‍💻 Autor

**[Bruno Guerra]**
- Universidad Tecnológica del Perú

⭐ Si te gustó este proyecto, no olvides darle una estrella!
