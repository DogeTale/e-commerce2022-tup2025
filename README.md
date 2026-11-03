# ZeroLag Ecommerce

Aplicación web de comercio electrónico para la exploración y compra de hardware, desarrollada como proyecto grupal. La interfaz está en español y presenta productos, categorías, ofertas, carrito, autenticación, pedidos y herramientas de administración.

## Equipo

El proyecto fue realizado por el grupo **La Cachoneta**, integrado por:

- Ramiro Soria
- Enzo Ulloa
- Emmanuel Yapura
- Germán Fratucello
- Agustín Gonzalez
- Esteban Montenegro

## Índice

- [Tecnologías](#tecnologías)
- [Requisitos y puesta en marcha](#requisitos-y-puesta-en-marcha)
- [Comandos disponibles](#comandos-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones de la aplicación](#secciones-de-la-aplicación)
- [Rutas y acceso](#rutas-y-acceso)
- [Autenticación y estado compartido](#autenticación-y-estado-compartido)
- [Integración con el backend](#integración-con-el-backend)
- [Estilos y recursos](#estilos-y-recursos)
- [Despliegue](#despliegue)
- [Notas del estado actual](#notas-del-estado-actual)

## Tecnologías

- **React 19** para la interfaz y los componentes.
- **Vite 8** para el servidor de desarrollo y la compilación.
- **React Router 7** para la navegación.
- **Tailwind CSS 4** y `@tailwindcss/vite` para los estilos.
- **Axios** para las solicitudes HTTP.
- **Day.js** para el manejo de fechas.
- **ESLint** con reglas para JavaScript, React y hooks.

El proyecto utiliza módulos ES y componentes escritos en JavaScript y JSX.

## Requisitos y puesta en marcha

Se necesita Node.js y pnpm instalados. El repositorio incluye `pnpm-lock.yaml`; se recomienda usar pnpm para instalar las mismas versiones de dependencias.

Desde la carpeta del proyecto:

```bash
pnpm install
pnpm dev
```

Vite muestra en la terminal la dirección local para abrir en el navegador. La aplicación espera que el backend configurado esté disponible para cargar datos dinámicos.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia Vite en modo desarrollo. |
| `pnpm build` | Genera la compilación de producción en `dist/`. |
| `pnpm preview` | Sirve localmente la compilación para previsualizarla. |
| `pnpm lint` | Ejecuta ESLint sobre el proyecto. |

También se pueden ejecutar los scripts con npm (`npm run dev`, `npm run build`, etc.), aunque pnpm es el gestor indicado por el archivo de bloqueo.

## Estructura del proyecto

```text
.
├── public/                 Recursos estáticos publicados sin transformación
├── src/
│   ├── api/                Cliente Axios con gestión de autenticación
│   ├── assets/             Recursos importados por la aplicación
│   ├── components/         Componentes globales y controles de acceso
│   ├── context/            Contexto de autenticación
│   ├── pages/              Páginas y componentes específicos de cada sección
│   │   ├── cart/           Flujo de carrito y checkout
│   │   │   └── cartlayout/ Componentes del listado y resumen del carrito
│   │   ├── home/           Secciones de la página principal
│   │   ├── login/          Formularios y elementos de acceso
│   │   ├── myaccount/      Perfil e historial de pedidos
│   │   ├── search/         Controles, filtros y resultados
│   │   └── tracking/       Componentes de seguimiento de envíos
│   ├── utils/              Funciones reutilizables
│   ├── App.jsx             Rutas y coordinación del estado compartido
│   ├── index.css           Estilos globales y tema Tailwind
│   └── main.jsx            Punto de entrada de React
├── eslint.config.js        Configuración de ESLint
├── index.html              Documento HTML de entrada
├── package.json            Dependencias y scripts
├── pnpm-lock.yaml          Versiones bloqueadas de dependencias
├── vercel.json             Reglas de proxy y fallback para Vercel
└── vite.config.js          Plugins y proxy de desarrollo
```

### Organización de `src`

- `App.jsx` declara las rutas, el encabezado y el pie de página, y comparte el estado del carrito.
- `components/` contiene elementos reutilizados, como `Header`, `Footer`, `Breadcrumbs` y las rutas protegidas.
- `context/AuthContext.jsx` expone el estado de sesión mediante `AuthProvider` y el hook `useAuth`.
- `api/axiosAuth.js` agrega las credenciales del usuario a las solicitudes protegidas y trata las respuestas `401`.
- `pages/` agrupa las páginas y sus piezas de interfaz por dominio.
- `utils/money.js` centraliza el formato de importes para la configuración regional argentina.

## Secciones de la aplicación

- **Inicio:** banners, categorías, ensamblados destacados y productos con stock bajo.
- **Catálogo:** búsqueda de productos y filtros por categoría, precio, chipset, marca y VRAM; las opciones se reflejan en los parámetros de la URL cuando corresponde.
- **Detalle de producto:** consulta un producto por identificador y permite agregarlo al carrito.
- **Acceso y registro:** formularios de alta e inicio de sesión.
- **Carrito y checkout:** listado de artículos, modificación de cantidades, creación de pedido, datos de envío/facturación y solicitud de preferencia de pago.
- **Pedidos y cuenta:** datos de perfil e historial de pedidos del usuario autenticado.
- **Inventario:** listado administrativo, filtro por categoría, valor del inventario y paginación.
- **Información institucional y página 404:** contenido informativo y navegación alternativa para rutas no encontradas.
- **Seguimiento:** hay componentes y una página de seguimiento implementados en `pages/tracking/` y `pages/TrackingPage.jsx`; actualmente esa página no está registrada en las rutas de `App.jsx`.

## Rutas y acceso

Las rutas declaradas en `App.jsx` son:

| Ruta | Acceso | Contenido |
| --- | --- | --- |
| `/` | Público | Inicio |
| `/product-details/:productId` | Público | Detalle de producto |
| `/search` | Público | Catálogo y filtros |
| `/about-us` | Público | Información institucional |
| `/login` | Solo usuarios no autenticados | Inicio de sesión y registro |
| `/checkout` | Usuario autenticado | Carrito y proceso de compra |
| `/orders` | Usuario autenticado | Cuenta e historial de pedidos |
| `/inventory` | Administrador | Gestión del inventario |
| `*` | Público | Página 404 |

`ProtectedRoute` requiere una sesión para las rutas de usuario. `AdminRoute` además comprueba que el rol almacenado sea `ADMIN`. `PublicRoute` redirige al inicio a los usuarios que ya iniciaron sesión.

## Autenticación y estado compartido

`AuthProvider`, montado desde `main.jsx`, proporciona el estado de autenticación al resto de la aplicación. La sesión se guarda en `localStorage` usando las claves `token` y `usuario`; el contexto extrae de los datos del usuario el nombre y el rol.

`axiosAuth.js` adjunta el token a las solicitudes autenticadas. Si el backend devuelve `401`, elimina las credenciales y redirige a `/login`. Al iniciar sesión también se emite el evento `user-logged-in`, que `App.jsx` escucha para volver a cargar el carrito.

El carrito se mantiene en el estado de `App.jsx` y se vuelve a consultar después de agregar, actualizar o eliminar artículos y al crear un pedido.

## Integración con el backend

La aplicación consume una API externa. Durante el desarrollo, `vite.config.js` redirige las solicitudes a `/api` e `/images` a `backend-ecommerce-lc.onrender.com`. En Vercel, `vercel.json` define rewrites equivalentes y entrega `index.html` para las rutas de la aplicación.

Las llamadas observadas en el código incluyen:

| Método | Endpoint | Uso |
| --- | --- | --- |
| `GET` | `/api/productos` | Catálogo e inventario |
| `GET` | `/api/productos/:productId` | Detalle de producto |
| `POST` | `/api/usuarios` | Registro |
| `POST` | `/api/usuarios/login` | Inicio de sesión |
| `GET` | `/api/carrito` | Carga del carrito |
| `POST` | `/api/carrito/items` | Agregar un producto |
| `PUT` | `/api/carrito/items/:itemId` | Actualizar cantidad |
| `DELETE` | `/api/carrito/items/:itemId` | Eliminar un artículo |
| `GET` | `/api/pedidos` | Consultar pedidos |
| `POST` | `/api/pedidos` | Crear un pedido |
| `POST` | `/api/pagos/crear-preferencia` | Solicitar una preferencia de pago |
| `GET` | `/api/orders/:orderId?expand=products` | Consultar datos para seguimiento |

Las respuestas y nombres de campos dependen del backend. Para cambiar el servicio remoto, hay que revisar tanto `vite.config.js` como `vercel.json`.

## Estilos y recursos

`src/index.css` importa Tailwind CSS, define los colores, tipografías, radios y espaciados del tema, e incluye estilos globales. La interfaz utiliza Inter y Material Symbols, cargados desde Google Fonts.

Los recursos visuales importados desde el código se encuentran en `src/assets/`; los archivos de `public/` —incluidos los favicons— se sirven directamente desde la raíz del sitio.

## Despliegue

El proyecto incluye configuración de Vercel en `vercel.json`:

1. Reenvía `/api/*` e `/images/*` al backend remoto.
2. Reescribe las demás rutas hacia `index.html` para permitir la navegación del cliente con React Router.

Para generar manualmente los archivos de producción:

```bash
pnpm build
```

El resultado se guarda en `dist/`. Esa carpeta es un artefacto generado y no contiene el código fuente del proyecto.

## Notas del estado actual

- El formulario de checkout mantiene dirección y tipo de facturación en estado local; el código actual no los envía al backend.
- La pantalla de pago busca `url_pago_prueba` en la respuesta del backend y redirige a esa URL.
- Los ensamblados mensuales se presentan como contenido definido en la interfaz; no se cargan desde la API en este componente.
- La página de seguimiento existe, pero falta incorporarla al árbol de rutas de `App.jsx` para acceder a ella mediante una ruta de la aplicación.
- Los datos del catálogo, el carrito, las cuentas, los pedidos y el pago requieren que el backend responda con la estructura esperada por cada pantalla.
