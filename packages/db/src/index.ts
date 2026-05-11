import { PrismaClient } from "../prisma/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";


const connectionString=process.env.DATABASE_URL
const adapter =new PrismaPg({connectionString})
//@ts-ignore
const prisma1=globalThis.prisma ?? new PrismaClient({adapter})
//@ts-ignore
if(process.env.NODE_ENV!=="production")globalThis.prisma

export{prisma1}