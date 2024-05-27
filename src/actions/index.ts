"use server";

import prisma from "../lib/prisma";
import { redirect } from "next/navigation";

export async function fetchArtworksByCategory(categoryId: number) {
  try {
    const artworks = await prisma.artwork.findMany({
      where: {
        categoryId: categoryId,
      },
    });
    console.log(artworks);
    return artworks;
  } catch (error) {
    console.error("Error fetching artworks:", error);
  }
}
