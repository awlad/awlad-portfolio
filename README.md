# Awlad's Portfolio

Personal portfolio website built with Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally with Docker

Prerequisite: [Docker](https://docs.docker.com/get-docker/) with Compose.

```bash
docker compose up --build
```

Open http://localhost:3021.

The project folder is mounted into the container, so code changes hot-reload.

Useful commands:

```bash
docker compose up -d          # run in background
docker compose logs -f        # follow logs
docker compose down           # stop and remove containers
docker compose build --no-cache   # rebuild after dependency changes
```

## Run without Docker

Requires Node.js 18+.

```bash
npm install
npm run dev -- -p 3021
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm start`     | Run production build     |
| `npm run lint`  | Lint the code            |

## Project structure

- `src/` – application source
- `public/` – static assets
- `Dockerfile`, `docker-compose.yml` – development container setup
