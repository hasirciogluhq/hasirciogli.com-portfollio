import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  const connectionString = process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL
  
  if (!connectionString) {
    throw new Error('POSTGRES_PRISMA_URL or DATABASE_URL environment variable is not set')
  }
  
  console.log('connectionString', connectionString)

  // Check if using Neon serverless
  const isNeon = connectionString.includes('neon.tech')
  
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

