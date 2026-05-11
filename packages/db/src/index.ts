import { PrismaClient } from "../prisma/generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const connectionString=process.env.DATABASE_URL
console.log(connectionString)
const adapter =new PrismaPg({connectionString})
//@ts-ignore
const prisma1=globalThis.prisma ?? new PrismaClient({adapter})
//@ts-ignore
if(process.env.NODE_ENV!=="production")globalThis.prisma=prisma1



export{prisma1};



