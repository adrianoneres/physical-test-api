-- CreateTable
CREATE TABLE "institutions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "institutions_pkey" PRIMARY KEY ("id")
);
