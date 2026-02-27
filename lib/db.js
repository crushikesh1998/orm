import { PrismaClient } from "@prisma/client/extension";

const globalForPrisma = globalThis
export const prisma = new PrismaClient() || globalForPrisma.prisma

if(process.env.NODE_ENV  !== "production") globalForPrisma.prisma = prisma