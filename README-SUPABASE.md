# Supabase setup

This project uses PostgreSQL through Drizzle ORM. Supabase provides the PostgreSQL database.

## 1. Create the database

In Supabase, open **SQL Editor**, paste the contents of `supabase/schema.sql`, and run it.

This creates the `public.appointments` table used by `/api/appointments`.

## 2. Configure the app

Create a local `.env` file by copying `.env.example` and put your Supabase PostgreSQL connection string in `DATABASE_URL`.

Recommended connection for this project: **Session pooler**, port `5432`.

Do not commit `.env` or share the database password.

## 3. Optional: create/update the schema with Drizzle

After setting `DATABASE_URL` locally:

```bash
npm install
npm run db:push
```

The SQL file is also provided so the table can be created directly in Supabase without exposing the database password.

## 4. Netlify

In Netlify, add the same `DATABASE_URL` under **Project configuration -> Environment variables** for the environment(s) you deploy to, then trigger a new deploy.
