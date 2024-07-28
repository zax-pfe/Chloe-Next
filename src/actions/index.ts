"use server";

import prisma from "../lib/prisma";
import { redirect } from "next/navigation";

interface User {
  id: string;
  userName: string;
  password: string;
}

export async function findUser(userName: string) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        userName: userName,
      },
    });
    if (user) {
      return { ...user, id: user.id.toString() } as User; // Convert id to string
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
