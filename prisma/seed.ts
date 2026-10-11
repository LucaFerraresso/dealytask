// This is the Prisma schema for DealyTask.
// It is intentionally designed for a SaaS product focused on sales pipeline management.

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  deals     Deal[]
  tasks     Task[]
}

model Deal {
  id          String        @id @default(cuid())
  name        String
  company     String
  value       Float
  stage       PipelineStage @default(NEW)
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  ownerId     String?
  owner       User?         @relation(fields: [ownerId], references: [id])
  tasks       Task[]
  notes       Note[]
}

model Task {
  id          String    @id @default(cuid())
  title       String
  description String?
  dueDate     DateTime?
  completed   Boolean   @default(false)
  createdAt   DateTime  @default(now())
  dealId      String?
  deal        Deal?     @relation(fields: [dealId], references: [id])
  assigneeId  String?
  assignee    User?     @relation(fields: [assigneeId], references: [id])
}

model Note {
  id        String   @id @default(cuid())
  content   String
  createdAt DateTime @default(now())
  dealId    String
  deal      Deal     @relation(fields: [dealId], references: [id])
}

enum PipelineStage {
  NEW
  CONTACTED
  PROPOSAL
  NEGOTIATION
  WON
  LOST
}
