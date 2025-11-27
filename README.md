# Thailand26 - Planificador de Viaje Digital

Un planificador de viaje interactivo y moderno que te permite organizar todas tus actividades de viaje en un solo lugar.

## ✨ Características

- 📅 **Filtrado por día**: Visualiza actividades por día específico
- 🎯 **Filtrado por tipo**: Filtra por hotel, avión, autobús o tour
- 🔗 **Enlaces útiles**: Acceso rápido a información relevante de cada actividad
- 📱 **Diseño responsive**: Funciona perfectamente en móviles, tablets y escritorio
- 🎨 **Interfaz moderna**: Diseño atractivo con gradientes y animaciones suaves

## 🚀 Cómo usar

### Ver el sitio web

1. El sitio está configurado para GitHub Pages
2. Ve a la configuración de tu repositorio en GitHub
3. Activa GitHub Pages en Settings > Pages
4. Selecciona la rama `main` como fuente
5. Tu sitio estará disponible en: `https://tu-usuario.github.io/Thailand26/`

### Editar información del viaje

Para agregar o modificar actividades, edita el archivo `data.js`:

```javascript
{
    id: 1,
    day: "Día 1",
    type: "bus",  // hotel, plane, bus, tour
    title: "Título de la actividad",
    details: {
        // Información específica según el tipo
    },
    links: [
        { name: "Nombre del enlace", url: "https://..." }
    ]
}
```

## 📁 Estructura del proyecto

```
Thailand26/
├── index.html      # Página principal
├── styles.css      # Estilos del sitio
├── script.js       # Lógica de filtrado y renderizado
├── data.js         # Datos del viaje (editable)
├── .nojekyll       # Configuración para GitHub Pages
└── README.md       # Este archivo
```

## 🎨 Tipos de actividades

- **🏨 Hotel**: Información de alojamiento
- **✈️ Avión**: Vuelos con horarios de salida y llegada
- **🚌 Autobús**: Transporte terrestre
- **🎯 Tour**: Excursiones y actividades turísticas

## 🔧 Personalización

Puedes personalizar:
- Colores en `styles.css`
- Datos del viaje en `data.js`
- Estructura HTML en `index.html`

## 📝 Licencia

Este proyecto es de código abierto y está disponible para uso personal.