# Lynq

Lynq is a self-hosted real-time chat platform foundation built with Fastify, Socket.IO, PostgreSQL, Valkey, MinIO, React, Vite, and TypeScript.

This repository contains a runnable monorepo with a production-oriented backend, frontend shell, database schema, authentication, message APIs, permission helpers, admin APIs, Socket.IO events, Docker Compose infrastructure, and tests. The project is intentionally explicit about security-sensitive paths such as password hashing, refresh-token rotation, route validation, and permission checks.

## Prerequisites

- Docker and Docker Compose
- Node.js 22 or newer for local development
- npm 10 or newer

## Quick Start

1. Create an environment file:

   ```sh
   cp .env.example .env
   openssl rand -hex 64
   ```

2. Fill `POSTGRES_PASSWORD`, `MINIO_ROOT_PASSWORD`, `JWT_ACCESS_SECRET`, and `JWT_REFRESH_SECRET` in `.env`.

3. Start the stack:

   ```sh
   docker compose up -d --build
   ```

4. Open `http://localhost`.

## Local Development

Install dependencies:

```sh
npm install
```

Run backend and frontend in separate terminals:

```sh
npm run dev:backend
npm run dev:frontend
```

Run verification:

```sh
npm run typecheck
npm test
npm run build
```

## Database

The schema is defined with Drizzle ORM under `packages/backend/src/db/schema`, with generated migrations under `packages/backend/src/db/migrations`. Regenerate and apply migrations with:

```sh
npm run db:generate --workspace @lynq/backend
npm run db:migrate --workspace @lynq/backend
```

The Docker Compose database is PostgreSQL 16 and includes the extensions required for trigram and full-text search through the migration workflow.

## First Admin

Set `LYNQ_ADMIN_EMAILS` in `.env` before registration. Any registered user whose email matches that comma-separated list is created with `is_lynq_admin = true` and can access `/admin`.

## Security Notes

- Passwords are hashed with argon2id.
- Refresh tokens are random values stored only as SHA-256 hashes.
- Mutating requests enforce origin checks when an `Origin` header is present.
- All API inputs are validated with Zod.
- Client-rendered markdown is sanitized with DOMPurify.
- Bot tokens and OAuth secrets are hashed before storage.

## FAQ

### Does this repository implement every Discord-scale feature?

No. It provides a runnable, verified core and the schema/API surface for expansion. Voice SFU, complete OAuth bot gateway behavior, full moderation workflows, and every advanced client setting require further implementation before they can be called complete.

### Can this run on Alpine Linux?

Yes. The Dockerfiles use Alpine-based Node and Caddy images, and Compose uses PostgreSQL 16 Alpine and Valkey Alpine.
