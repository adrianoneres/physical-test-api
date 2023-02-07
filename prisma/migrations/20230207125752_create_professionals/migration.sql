-- CreateTable
CREATE TABLE "professionals" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "professionals_pkey" PRIMARY KEY ("id")
);
