-- Premium Beauty Artist / Nargis Makeup Artist
-- Run this once in Supabase SQL Editor to create the appointments table.

create table if not exists public.appointments (
  id serial primary key,
  name varchar(255) not null,
  phone varchar(20) not null,
  service varchar(255) not null,
  preferred_date varchar(50),
  preferred_time varchar(50),
  location text,
  message text,
  created_at timestamp not null default now()
);

create index if not exists appointments_created_at_idx
  on public.appointments (created_at desc);

-- The website writes to this table through the server-side Next.js API.
-- Keep the table protected from direct anonymous browser access.
alter table public.appointments enable row level security;
