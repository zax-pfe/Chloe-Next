-- CreateTable
CREATE TABLE "Artwork" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "materialType" TEXT NOT NULL,
    "dimensions" TEXT NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Artwork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_userName_key" ON "Users"("userName");
