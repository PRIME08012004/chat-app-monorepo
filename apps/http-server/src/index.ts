import express from "express"
import {prisma1} from "@repo/db"
const app= express();

async function main() {

 //we still having issue to get types while working on the prisma
 
  const user = await prisma1.user.create({
    data: {
      name: "Rohit Potdar",
      email: "rohit07@gmail.com",
    },
  });
  console.log("User Created ", user);
}


main()
  .catch((e) => {
    console.error("error", e);
  })
  .finally(async () => {
    await prisma1.$disconnect();
  });

  app.listen(3000)