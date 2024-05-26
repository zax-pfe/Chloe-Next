/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Thumbnail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Artwork` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Artwork" DROP CONSTRAINT "Artwork_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Thumbnail" DROP CONSTRAINT "Thumbnail_artworkId_fkey";

-- DropIndex
DROP INDEX "Artwork_name_key";

-- AlterTable
ALTER TABLE "Artwork" ADD COLUMN     "category" TEXT NOT NULL;

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Thumbnail";
