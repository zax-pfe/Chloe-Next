import { PrismaClient } from "@prisma/client";
// import { hash } from "bcryptjs";

import { admins } from "./admin";

const prisma = new PrismaClient();

async function main() {
  for (let admin of admins) {
    await prisma.users.create({
      data: admin,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
