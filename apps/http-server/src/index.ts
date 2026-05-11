import express from "express"
import {prisma1} from "@repo/db"
const app= express();

async function main() {

 
  const user = await prisma1.user.create({
    data: {
      name: "Rohit Potdar",
      email: "rohitpotdar0007@gmail.com",
    },
  });
  console.log("User Created ", user);
}
const chats=prisma1.chats.findOne({
    
})

main()
  .catch((e) => {
    console.error("error", e);
  })
  .finally(async () => {
    await prisma1.$disconnect();
  });

  app.listen(3000)