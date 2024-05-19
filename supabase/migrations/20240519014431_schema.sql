create type task_status as enum ('pending', 'completed', 'failed');

create table tasks (
    id bigint generated always as identity primary key,
    user_id uuid not null references public.users on delete cascade,
    title text not null,
    minutes integer not null,
    status task_status not null default 'pending',
    created_at timestamptz not null default now()
);

alter table tasks enable row level security;

create policy "Users can only read their own pomodoro tasks" on
tasks
  for all
    using (auth.uid () = tasks.user_id)
    with check (auth.uid () = tasks.user_id);
