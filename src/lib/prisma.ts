import { PrismaClient } from "@prisma/client";

// Tipo para a cache global
type CustomGlobal = typeof globalThis & {
  cachedPrisma?: PrismaClient;
};

// Cast do global para nosso tipo customizado
const customGlobal = global as CustomGlobal;

const prisma = customGlobal.cachedPrisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  customGlobal.cachedPrisma = prisma;
}

export const db = prisma;
