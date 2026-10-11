# dealytask

DealyTask is a mobile-first SaaS product for managing deals, sales follow-ups, team tasks, and customer pipeline visibility in a single place.

This repository is the foundation for a serious product built with Next.js 15, TypeScript, Tailwind CSS, Prisma, and a business-ready architecture aimed at recurring revenue and strong retention.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- NextAuth
- Stripe
- Vercel-ready deployment

## Product direction

DealyTask is designed as a SaaS for teams that need to:

- track opportunities and pipeline stages
- assign tasks to team members
- follow up with leads on time
- monitor performance from a single dashboard
- convert customer activity into revenue

## Repository structure

- `app/` — routes, pages, and product UI
- `components/` — reusable UI and layout blocks
- `features/` — product domains like deals, tasks, accounts
- `lib/` — utilities, database access, auth helpers
- `services/` — billing, notifications, integrations
- `prisma/` — database schema and migrations
- `types/` — shared TypeScript contracts

## Getting started

```bash
npm install
cp .env.example .env
npx prisma generate
npm run dev
```

## Production mindset

This codebase is intentionally structured to support a proper SaaS roadmap:

- onboarding and auth
- pipeline and deal tracking
- task management
- reminders and notifications
- subscriptions and pricing
- analytics and reporting

## License

MIT
