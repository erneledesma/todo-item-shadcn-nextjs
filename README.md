# Todo App (Next.js 13/14 + Prisma + PostgreSQL)

Aplicación web para la gestión de tareas (ToDo List) construida con Next.js (App Router), Prisma ORM y PostgreSQL. Permite crear, listar, completar y eliminar tareas de manera sencilla, con una interfaz moderna y responsiva.

## 🚀 Tecnologías principales
- [Next.js 13/14](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## 📦 Estructura del proyecto
```
my-dashboar-dcn/
├── app/                # Rutas y páginas Next.js
├── components/         # Componentes reutilizables
├── todos/              # Lógica y componentes de tareas
├── prisma/             # Esquema y migraciones de Prisma
├── lib/                # Utilidades y helpers
├── styles/             # Estilos globales (Tailwind)
├── public/             # Archivos estáticos
└── ...
```

## ⚙️ Instalación y configuración

1. **Clona el repositorio:**
   ```bash
   git clone <repo-url>
   cd my-dashboar-dcn
   ```

2. **Levanta la base de datos con Docker:**
   ```bash
   docker compose up -d
   ```

3. **Configura las variables de entorno:**
   - Copia el archivo `.env.template` a `.env` y completa los valores necesarios (conexión a la base de datos, etc).

4. **Instala las dependencias:**
   ```bash
   npm install
   ```

5. **Ejecuta las migraciones y genera el cliente Prisma:**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

6. **(Opcional) Ejecuta el seed para poblar la base de datos:**
   - Accede a [localhost:3000/api/seed](http://localhost:3000/api/seed) para crear datos de ejemplo.

7. **Inicia la aplicación en desarrollo:**
   ```bash
   npm run dev
   ```

## 📝 Comandos útiles
- `docker compose up -d` — Levanta la base de datos PostgreSQL en Docker
- `npx prisma migrate dev` — Aplica migraciones de la base de datos
- `npx prisma generate` — Genera el cliente Prisma
- `npm run dev` — Inicia la app en modo desarrollo

## 🌐 Uso
- Accede a [http://localhost:3000](http://localhost:3000) para ver la aplicación en funcionamiento.
- Puedes crear, completar y eliminar tareas desde la interfaz.

## 📁 Estructura de carpetas relevante
- `app/` — Páginas y rutas Next.js
- `todos/` — Componentes y lógica de tareas
- `prisma/` — Esquema y migraciones de base de datos
- `lib/` — Utilidades compartidas
- `styles/` — Estilos globales (Tailwind)

## 🤝 Contribuciones
¡Las contribuciones son bienvenidas! Por favor, abre un issue o pull request para sugerir mejoras o reportar problemas.

## 📝 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

**Desarrollado por [Tu Nombre o Usuario](https://github.com/erneledesma)**
