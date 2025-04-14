-- CreateTable
CREATE TABLE "TableUser" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "autorized" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TableUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableService" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "localisation" TEXT NOT NULL,

    CONSTRAINT "TableService_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableObject" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "lastUpdate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TableObject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableIncident" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "TableIncident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TableActu" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TableActu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TableUser_username_key" ON "TableUser"("username");

-- CreateIndex
CREATE UNIQUE INDEX "TableUser_email_key" ON "TableUser"("email");

-- AddForeignKey
ALTER TABLE "TableIncident" ADD CONSTRAINT "TableIncident_username_fkey" FOREIGN KEY ("username") REFERENCES "TableUser"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
